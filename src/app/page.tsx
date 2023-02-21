import Image from 'next/image'
import { Inter } from '@next/font/google'
import './style.css'

const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
  <main>

    <div className='hello-world'>
        <div className='logo'>
        <h2>Jh</h2>
        </div>
      <h1>Hello World!</h1>
    </div>
  </main>
  
  )
}
