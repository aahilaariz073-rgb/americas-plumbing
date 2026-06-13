import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: '#080f1f',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: '36px',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '72px',
          fontWeight: 800,
          letterSpacing: '-3px',
          lineHeight: 1,
          display: 'flex',
        }}
      >
        AP
      </div>
      <div
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '20px',
          fontWeight: 600,
          marginTop: '8px',
          letterSpacing: '2px',
          display: 'flex',
        }}
      >
        PLUMBING
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '16px',
          background: '#C8202A',
          borderRadius: '0 0 36px 36px',
          display: 'flex',
        }}
      />
    </div>,
    { ...size }
  );
}
