import Image from 'next/image'
import { Inter } from '@next/font/google'
import './style.css'

const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
  <main>

    <div className='hello-world'>


    <div className='social'>
      <div className='bot git'><a href="https://github.com/Jh0rdanW3sley"><h2>Github</h2></a></div>
      <div className='bot link'><a href="https://www.linkedin.com/in/jhordan-wesley-291a55245/"><h2>Linkedin</h2></a></div>
    </div>

        <div className='logo'>
        <h2>Jh</h2>
        </div>
      <h1>Hello World!</h1>
    </div>
    
  </main>
  
  )
}
