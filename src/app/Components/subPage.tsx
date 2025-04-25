import Link from "next/link"
function SubPage({ text }: { text: string }) {
    return (
        <Link href='' className='relative after:bg-primary after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-gray-600 pb-1'>{text}</Link>
    )
}

export default SubPage
