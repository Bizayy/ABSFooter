import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import SocialIcon from './socialIcon'
import QuickLinksSection from './quickLinksSection'
import ServicesSection from './servicesSection'
import InformationSection from './informationSection'
const TopFooter = () => {
    return (
        <div className='w-full flex flex-col xl:flex-row items-start justify-center gap-10'>
            <div className='w-full xl:w-1/2'>
                <div className='relative w-[300px] h-[230px] sm:w-3/4 sm:h-[300px] md:max-w-[400px] 2xl:max-w-[520px] 2xl:h-[400px] object-cover cursor-pointer'>
                    <Link href="/" className='cursor-pointer'>
                        <Image src="/absLogo.png" fill alt='logo' />
                    </Link>
                </div>
                <div className='flex flex-col items-start justify-start gap-5'>
                    <p className='w-3/4 md:w-1/2 xl:w-2/3 text-gray-500 break-words 2xl:text-lg'>ABS Soft: Your trusted IT partner in Nepal, crafting tailored digital solutions to empower businesses and drive success.</p>

                    {/* Social Media icons */}
                    <div className='w-full flex items-center justify-start gap-2'>
                        <SocialIcon href='/'>
                            <FaFacebookF size={16} />
                        </SocialIcon>
                        <SocialIcon href='/'>
                            <FaLinkedinIn size={16} />
                        </SocialIcon>
                        <SocialIcon href='/'>
                            <FaTwitter size={16} />
                        </SocialIcon>
                        <SocialIcon href='/'>
                            <RiInstagramFill size={16} />
                        </SocialIcon>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-start justify-start gap-8 lg:gap-20 xl:w-1/2'>
                {/* Quick Link Section*/}
                <QuickLinksSection />

                {/* Services Section*/}
                <ServicesSection />

                {/* Information Section*/}
                <InformationSection />

            </div>
        </div>
    )
}
export default TopFooter;
