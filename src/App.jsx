import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar.jsx'

const Hero = lazy(() => import('./components/Hero.jsx'))
const Clients = lazy(() => import('./components/Clients.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Services = lazy(() => import('./components/Services.jsx'))
const SoftwareServices = lazy(() => import('./components/SoftwareServices.jsx'))
const Team = lazy(() => import('./components/Team.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans antialiased">
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <Clients />
        </Suspense>
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Services />
        </Suspense>
        <Suspense fallback={null}>
          <SoftwareServices />
        </Suspense>
        <Suspense fallback={null}>
          <Team />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}
