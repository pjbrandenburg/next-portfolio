import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import { motion } from "framer-motion"
import Image from 'next/image'
import Headshot from '../images/PJB Headshot.jpg'

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-col relative h-screen text-center md:text-left 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.div
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        >
            <Image className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
                object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] sl:h-[600px]" 
                src={urlFor(pageInfo?.profilePic).url()} 
                alt='' />
        </motion.div>        

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl fond-semibold">Here is a{" "} 
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
            </h4>
            <p className="text-base">
                {pageInfo?.backgroundInformation}
            </p>
        </div>

    </motion.div>
  )
}

export default About