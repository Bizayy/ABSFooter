import { ReactNode } from 'react'
import Link from 'next/link'
type socialIconType = {
    href: string,
    children: ReactNode,
}
function SocialIcon({ href, children }: socialIconType) {
    return (
        <Link href={href} className='w-11 h-11 rounded-md p-2 flex items-center justify-center bg-primary text-white hover:bg-sky-700'>
            {children}
        </Link>
    )
}

export default SocialIcon
