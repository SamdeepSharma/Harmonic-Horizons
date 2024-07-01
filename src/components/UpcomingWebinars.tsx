'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';

const UpcomingWebinars = () => {
     const webinars = [
          {
               title: 'Understanding Music Theory',
               description:
                    'Dive deep into the fundamentals of music theory and enhance your musical skills.',
               slug: 'understanding-music-theory',
               isFeatured: true,
          },
          {
               title: 'The Art of Songwriting',
               description:
                    'Learn the craft of songwriting from experienced musicians and songwriters.',
               slug: 'the-art-of-songwriting',
               isFeatured: true,
          },
          {
               title: 'Mastering Your Instrument',
               description:
                    'Advanced techniques to master your musical instrument of choice.',
               slug: 'mastering-your-instrument',
               isFeatured: true,
          },
          {
               title: 'Music Production Essentials',
               description:
                    'Get started with music production with this comprehensive overview.',
               slug: 'music-production-essentials',
               isFeatured: true,
          },
          // Added two more webinars
          {
               title: 'Live Performance Techniques',
               description:
                    'Enhance your live performance skills with expert tips and strategies.',
               slug: 'live-performance-techniques',
               isFeatured: true,
          },
          {
               title: 'Digital Music Marketing',
               description:
                    'Learn how to promote your music effectively in the digital age.',
               slug: 'digital-music-marketing',
               isFeatured: true,
          },
     ];
     return (
          <div className="bg-gray-900 py-20">
               <div className="text-center">
                    <h2 className="text-teal-600 text-base font-semibold uppercase tracking-wide">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">Learn with the best!</p>
               </div>
               <div className="mt-10">
                    <div className="max-w-5xl mx-auto px-8 dark">
                         <HoverEffect items={webinars.map((webinar) => ({
                              title: webinar.title,
                              description: webinar.description,
                              link: webinar.slug
                         }))} />
                    </div>
               </div>
               <div className="mt-10 text-center">
                    <Link href={"/courses"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                         View All Webinars
                    </Link>
               </div>
          </div >
     )
}

export default UpcomingWebinars