import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import StickyScroll from '@/components/StickyScroll';
import GridScrollingCards from '@/components/GridScrollingCards';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScroll/>
      <GridScrollingCards/>
    </main>
  );
}
