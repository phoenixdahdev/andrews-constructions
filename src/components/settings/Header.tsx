'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {
  const pathname = usePathname()
  return (
    <nav className="bg-accent font-roboto flex w-fit gap-[10px] rounded-[12px] p-[8px]">
      <Link
        href="/settings/profile"
        className={`rounded-[10px] px-[38px] leading-[48px] transition-colors duration-[250ms] ${pathname.includes('profile') ? 'hover:bg-primary/80 bg-primary font-medium text-white' : 'hover:bg-primary/10 text-gray-dark font-normal'}`}
      >
        Profile
      </Link>
      <Link
        href="/settings/security"
        className={`rounded-[10px] px-[38px] leading-[48px] transition-colors duration-[250ms] ${pathname.includes('security') ? 'hover:bg-primary/80 bg-primary font-medium text-white' : 'hover:bg-primary/10 text-gray-dark font-normal'}`}
      >
        Security
      </Link>
      <Link
        href="/settings/notifications"
        className={`rounded-[10px] px-[38px] leading-[48px] transition-colors duration-[250ms] ${pathname.includes('notifications') ? 'hover:bg-primary/80 bg-primary font-medium text-white' : 'hover:bg-primary/10 text-gray-dark font-normal'}`}
      >
        Notifications
      </Link>
      <Link
        href="/settings/materials"
        className={`rounded-[10px] px-[38px] leading-[48px] transition-colors duration-[250ms] ${pathname.includes('materials') ? 'hover:bg-primary/80 bg-primary font-medium text-white' : 'hover:bg-primary/10 text-gray-dark font-normal'}`}
      >
        Materials
      </Link>
    </nav>
  )
}
