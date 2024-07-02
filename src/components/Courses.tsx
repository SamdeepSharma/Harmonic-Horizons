"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import courseData from '@/data/music_courses.json'

const Courses = () => {
     return (
               <div className="dark flex flex-col justify-center items-center min-h-screen py-12 pt-32">
                    <h1 className="text-lg md:text-5xl text-center font-sans font-bold text-white pb-4">All courses({courseData.courses.length})</h1>
                    <div className="flex flex-wrap justify-center">
                         {courseData.courses.map((course) => (
                              <CardContainer key={course.id} className="inter-var m-4">
                                   <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6 border  ">
                                        <CardItem
                                             translateZ="50"
                                             className="text-xl font-bold text-neutral-600 dark:text-white"
                                        >
                                             {course.title}
                                        </CardItem>
                                        <CardItem
                                             as="p"
                                             translateZ="60"
                                             className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                        >
                                             {course.description}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                             <Image
                                                  src={course.image}
                                                  height="1000"
                                                  width="1000"
                                                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                  alt={course.title}
                                             />
                                        </CardItem>
                                        <div className="flex justify-between items-center mt-16">
                                             <CardItem
                                                  translateZ={20}
                                                  as={Link}
                                                  href={`/courses/${course.slug}`}
                                                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                             >
                                                  Read more →
                                             </CardItem>
                                             <CardItem
                                                  translateZ={20}
                                                  as={Link}
                                                  href={"/login"}
                                                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                             >
                                                  Buy Now
                                             </CardItem>
                                        </div>
                                   </CardBody>
                              </CardContainer>
                         ))}
                    </div>
               </div>
     )
}

export default Courses
