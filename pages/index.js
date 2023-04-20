import { Footer } from '@/components'
import { useEffect } from 'react'
import OneSignal from 'react-onesignal';
//c0046090-9b33-4c39-9197-5120d4f599de

export default function Home() {
  useEffect(() => {
    (async () => {
      await OneSignal.init({ appId: 'c0046090-9b33-4c39-9197-5120d4f599de' });
      OneSignal.showSlidedownPrompt();
    })();
}, []); // <-- run this effect once on mount

  return (
    <>
      <>Home</>
      <Footer />
    </>
  )
}
