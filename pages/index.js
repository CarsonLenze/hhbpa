import { Footer, Navbar, Hero } from '@/components'
import { useState, useEffect } from 'react'
import { styled } from '@nextui-org/react'


export default function Home() {
  const [state, setState] = useState(false);
  //setState(bol)
  return (
    <>
      <div className='slide' style={{
        transition: '2s',
        right: state ? ' 30vh' : '0vh',
        width: '100%', position: 'absolute',
      }}>
        <Navbar open={state} onChange={(bol) => setState(bol)} />

        <Hero />
        <>Home</>
        <Footer />
      </div>
    </>
  )
}
