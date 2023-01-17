import { urlFor } from "@/sanity"
import { Experience } from "@/typings"
import { motion } from "framer-motion"
import Image from 'next/image'
import Headshot from '../images/PJB Headshot.jpg'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.div
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        >
            <Image className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" 
                src={urlFor(experience?.companyImage).url()} 
                alt='' />
        </motion.div>

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Software Engineer</h4>
            <p className="font-bold text-2xl mt-1">MiR</p>
            <div className="flex space-x-2 my-2">
                {/* Tech Used */}
                {experience.technologies.map(technology => (
                    <img 
                        key={technology._id}
                        className="h-10 w-10 rounded-full"
                        src={urlFor(technology.image).url()}
                    />
                ))}
                {/* <Image className="h-10 w-10 rounded-full" src={Headshot} alt='' /> */}
            </div>
            <p className="uppercase py-5 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? 
                "Present"
                : new Date(experience.dateEnded).toDateString()
                } 
            </p>

            <ul className="list-disc space-y-4 ml-5 text-lg h-96 max-w-42
                overflow-y-scroll scrollbar-thin scrollbar-track-black 
                scrollbar-thumb-[#F7AB0A]/80">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>      
    </article>
  )
}

export default ExperienceCard