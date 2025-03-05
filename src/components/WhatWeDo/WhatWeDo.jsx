'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">
                {/* head of section */}
                <div className="wwd-head">
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='tag'
                    >What we do</motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title1'
                    >
                        {" "}
                        Empowering Businesses with Digital Solutions and Expertise
                    </motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'
                    >Here’s how we can help your business grow</motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            Digital Marketing
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Boost your online presence with data-driven strategies.
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    {/* second block */}
                    <div className="wwd-block">
                        <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>
                            Web & App Development
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Build stunning websites and mobile apps for seamless user experiences.
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' 
                                    key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* support block */}
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants(0.3)}
                className="wwd-support">
                    {/* left side */}
                    <div style={{marginRight:"10px"}}>
                        <span className="sec-title">
                            Business Solutions
                        </span>
                        <span className="des">
                            Comprehensive support for SMEs and Startups
                        </span>
                    </div>

                    {/* right side */}
                    <div>
                        <span className='text'>
                            From market research to fundraising assistance, we provide end-to-end solutions to help your business thrive.
                        </span>
                        <span className='text'>
                            Our expertise includes branding, IT consulting, financial planning, and legal & tech assistance.
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo