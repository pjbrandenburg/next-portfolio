import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Experience, Skill, Project, Social } from "../typings"
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import experience from '@/sanity/schemas/experience'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, experiences, projects, skills, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name}'s Portfolio</title>

      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id='hero' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}+
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

    <Link href='#hero' >
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src='https://i.imgur.com/e2yvD6A.png' alt='' />
        </div>
      </footer>
    </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }
}