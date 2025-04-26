import Link from "next/link"
import SubPage from "./subPage"
function InformationSection() {
    return (
        <div className='w-full md:w-1/3 flex flex-col items-start justify-start gap-6'>
            <h1 className='w-full text-primary font-semibold text-xl 2xl:text-2xl'>Information</h1>
            <div className='w-full flex flex-col gap-5 items-start justify-start 2xl:text-lg'>
                <SubPage text="Services" />
                <SubPage text="Privacy Policy" />
                <SubPage text="Terms & Conditions" />
                <SubPage text="FAQs" />
            </div>
        </div>
    )
}

export default InformationSection
