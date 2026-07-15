import { Suspense } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Areas from './components/Areas';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Schema from './components/Schema';
import HomepageCTAStrip from './components/HomepageCTAStrip';

export default function Home() {
  return (
    <>
      <Schema page="home" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Areas />
        <Gallery />
        <HomepageCTAStrip />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
