import Link from "next/link"
import SubPage from "./subPage"
function QuickLinksSection() {
    return (
        <div className='w-full md:w-1/3 flex flex-col items-start justify-start gap-6'>
            <h1 className='w-full text-primary font-semibold text-xl 2xl:text-2xl'>Quick Links</h1>
            <div className='w-full flex flex-col gap-5 items-start justify-start 2xl:text-lg'>
                <SubPage text="About Us" />
                <SubPage text="Our Team" />
                <SubPage text="Pricing" />
                <SubPage text="Blog" />
                <SubPage text="Contact Us" />
            </div>
        </div>
    )
}

export default QuickLinksSection
