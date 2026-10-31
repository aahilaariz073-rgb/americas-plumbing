// Web3Forms submission helper. The access key is public by design (it only
// allows sending to the email address registered with Web3Forms).
// Get one at https://web3forms.com and set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
const ENDPOINT = 'https://api.web3forms.com/submit';

export async function submitWeb3Form(
  subject: string,
  fields: Record<string, string>,
): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  // Web3Forms rejects a non-email value in `email`, so move placeholders out.
  const { email, ...rest } = fields;
  const emailOk = !!email && /^\S+@\S+\.\S+$/.test(email);

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "America's Plumbing Website",
      ...rest,
      ...(emailOk ? { email } : { email_provided: 'no' }),
    }),
  });
  const json = await res.json();
  return Boolean(json.success);
}
