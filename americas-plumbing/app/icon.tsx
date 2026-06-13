import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '13px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          lineHeight: 1,
          display: 'flex',
        }}
      >
        AP
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: '#C8202A',
          display: 'flex',
        }}
      />
    </div>,
    { ...size }
  );
}
