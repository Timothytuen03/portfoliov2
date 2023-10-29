import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import Involvement from './Involvement'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className='absolute top-2 md:flex justify-start w-full'>
        <h3 className='ml-5'>Timothy Tuen</h3>
        <h3 className='ml-5'>|</h3>
        <Link className='ml-5' href="#intro" scroll={false}>Home</Link>
        <Link className='ml-5' href="#about" scroll={false}>About</Link>
        <Link className='ml-5' href='#projects' scroll={false}>Projects</Link>
        <Link className='ml-5' href='#edu'>Education</Link>
        <Link className='ml-5' href='#involvement'>Involvement</Link>
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
      <section id="intro"><Intro id="intro"/></section>
      <section id="about"><About id="about"/></section>
      <section id="projects"><Projects/></section>
      <section id="edu"><Education /></section>
      <section id="involvement"><Involvement id="involvement"/></section>
    </div>
  )
}
