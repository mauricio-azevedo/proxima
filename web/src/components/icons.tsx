import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function HomeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 10.75 12 4.5l7.25 6.25v7.5a1.5 1.5 0 0 1-1.5 1.5h-3.5v-5.5h-4.5v5.5h-3.5a1.5 1.5 0 0 1-1.5-1.5v-7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.75 18.25a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15ZM16.25 16.25l4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12.25a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.75 20.25a7.25 7.25 0 0 1 14.5 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M18.25 13.1c.05-.36.05-.74 0-1.1l2-1.55-2-3.46-2.36.95a7.07 7.07 0 0 0-1.9-1.1L13.64 4h-4l-.35 2.84a7.07 7.07 0 0 0-1.9 1.1l-2.36-.95-2 3.46L5 12c-.05.36-.05.74 0 1.1l-1.97 1.55 2 3.46 2.36-.95c.58.47 1.22.84 1.9 1.1l.35 2.84h4l.35-2.84c.68-.26 1.32-.63 1.9-1.1l2.36.95 2-3.46-2-1.55Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.75 5.25h-4a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h4M14.25 8.25 18 12l-3.75 3.75M17.5 12H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
