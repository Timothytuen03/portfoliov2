import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import Involvement from './Involvement'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className=' md:flex justify-center text-cyan-600 bg-white'>
        <h3 className='ml-5'>Timothy Tuen</h3>
        <h3 className='ml-5'>|</h3>
        <Link className='ml-5' href="#intro" scroll={true}>Home</Link>
        <Link className='ml-5' href="#about" scroll={true}>About</Link>
        <Link className='ml-5' href='#projects'>Projects</Link>
        <Link className='ml-5' href='#edu'>Education</Link>
        <Link className='ml-5' href='#involvement'>Involvement</Link>
      </div>
    </nav>
  )
}

export default function Home() {
  return (
    <div>
      <header className='fixed top-0 w-[100vw] z-50'>
        <Navbar/>
      </header>
      <section id="intro"><Intro id="intro"/></section>
      <section id="about"><About id="about"/></section>
      <section id="projects"><Projects/></section>
      <section id="edu"><Education /></section>
      <section id="involvement"><Involvement/></section>
    </div>
  )
}
