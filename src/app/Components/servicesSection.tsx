import Link from "next/link"
import SubPage from "./subPage"
function ServicesSection() {
    return (
        <div className='w-full md:w-1/3 flex flex-col items-start justify-start gap-6'>
            <h1 className='w-full text-primary font-semibold text-xl'>Services</h1>
            <div className='w-full flex flex-col gap-5 items-start justify-start'>
                <SubPage text="IT Solutions" />
                <SubPage text="SEO" />
                <SubPage text="Digital Marketing" />
                <SubPage text="Bulk SMS" />
                <SubPage text="Website Development" />
            </div>
        </div>
    )
}

export default ServicesSection
