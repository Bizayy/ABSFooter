'use client'
import BottomFooter from './bottomFooter'
import TopFooter from './topFooter'

function Footer() {
    return (
        <div className='w-full h-full bg-[#f5f6f7] px-[5%] py-14 sm:px-[12%] md:px-[8%] flex flex-col items-center justify-center gap-14'>

            {/* Top Footer*/}
            <TopFooter />

            {/* Bottom Footer*/}
            <BottomFooter />
        </div>
    )
}

export default Footer
