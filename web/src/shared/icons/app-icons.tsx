import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3.8 10.9 12 4l8.2 6.9v8.3a1.8 1.8 0 0 1-1.8 1.8h-3.2v-6.1H8.8V21H5.6a1.8 1.8 0 0 1-1.8-1.8z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M10.8 4.2a6.6 6.6 0 1 0 4.2 11.7l3.6 3.6a1.1 1.1 0 0 0 1.5-1.5l-3.6-3.6A6.6 6.6 0 0 0 10.8 4.2Zm0 2.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 12.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Zm0 2.1c-4.7 0-7.7 2.4-7.7 5.2 0 .8.6 1.5 1.5 1.5h12.4c.9 0 1.5-.7 1.5-1.5 0-2.8-3-5.2-7.7-5.2Z" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M19.4 13.5a7.8 7.8 0 0 0 .1-1.5 7.8 7.8 0 0 0-.1-1.5l2-1.5-2-3.5-2.4 1a8.7 8.7 0 0 0-2.6-1.5L14 2h-4l-.4 2.5A8.7 8.7 0 0 0 7 6L4.6 5l-2 3.5 2 1.5a7.8 7.8 0 0 0-.1 1.5 7.8 7.8 0 0 0 .1 1.5l-2 1.5 2 3.5 2.4-1a8.7 8.7 0 0 0 2.6 1.5L10 22h4l.4-2.5A8.7 8.7 0 0 0 17 18l2.4 1 2-3.5-2-1.5ZM12 15.4a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Z" />
    </svg>
  );
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M13.2 4.8a1 1 0 0 0-1-1H5.8A2.8 2.8 0 0 0 3 6.6v10.8a2.8 2.8 0 0 0 2.8 2.8h6.4a1 1 0 1 0 0-2H5.8a.8.8 0 0 1-.8-.8V6.6a.8.8 0 0 1 .8-.8h6.4a1 1 0 0 0 1-1Zm4.6 6.2-2.1-2.1a1 1 0 1 1 1.4-1.4l3.8 3.8a1 1 0 0 1 0 1.4l-3.8 3.8a1 1 0 1 1-1.4-1.4l2.1-2.1H10a1 1 0 1 1 0-2h7.8Z" />
    </svg>
  );
}
