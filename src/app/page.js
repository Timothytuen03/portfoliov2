import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className='absolute top-2 md:flex justify-start w-full'>
        <h3 className='ml-5'>Timothy Tuen</h3>
        <h3 className='ml-5'>|</h3>
        <a className='ml-5' href="#intro">Home</a>
        <a className='ml-5' href="#about">About</a>
        <a className='ml-5' href='#projects'>Projects</a>
        <a className='ml-5'>Education</a>
      </div>
    </nav>
  )
}

export default function Home() {
  return (
    <div>
      <header className='block'>
        <Navbar/>
      </header>
      <Intro id="intro"/>
      <About id="about"/>
      <Projects id="projects"/>
    </div>
  )
}
