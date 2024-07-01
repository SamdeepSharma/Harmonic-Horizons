import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import StickyScroll from '@/components/StickyScroll';
import GridScrollingCards from '@/components/GridScrollingCards';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import Instructors from '@/components/Instructors';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScroll/>
      <GridScrollingCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
