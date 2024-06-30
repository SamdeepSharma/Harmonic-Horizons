"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import courseData from '@/data/music_courses.json'
import { IconAppWindow } from "@tabler/icons-react";

interface Course {
     id: number,
     title: string,
     slug: string,
     description: string,
     price: number,
     instructor: string,
     isFeatured: boolean,
}

const FeaturedCourses = () => {
     const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
     return (
          <div className="bg-gray-900 py-12">
               <div className="text-center">
                    <h2 className="text-teal-600 text-base font-semibold uppercase tracking-wide">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">Learn with the best!</p>
               </div>
               <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {
                              featuredCourses.map((course: Course) => (
                                   <div key={course.id} className="dark flex justify-center">
                                        <BackgroundGradient className="mb-6 rounded-[22px] max-w-md h-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                             <div>
                                                  <h3 className="text-base sm:text-xl text-black mb-4 dark:text-neutral-200">
                                                       {course.title}
                                                  </h3>
                                                  <p className="text-sm text-neutral-600 dark:text-neutral-400 min-h-16">
                                                       {course.description}
                                                  </p>
                                             </div>
                                             <div className="mt-6">
                                                  <Link href={`/courses/${course.slug}`} className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-gray-200">
                                                       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#86EFAC_50%,#E2CBFF_100%)]" />
                                                       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-500 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                                            Learn more
                                                       </span>
                                                  </Link>
                                             </div>
                                        </BackgroundGradient>
                                   </div>
                              ))
                         }
                    </div>
               </div>
               <div className="mt-20 text-center ">
                    <Link href={"/courses"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                         View All Courses
                    </Link>
               </div>
          </div>
     )
}

export default FeaturedCourses