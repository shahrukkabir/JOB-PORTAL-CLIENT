import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../../assets/Team/team-1.jpg'
import team2 from '../../assets/Team/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 ml-52'>
                    <motion.img src={team1} animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 10 , repeat:Infinity }}
                        className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                    
                    <motion.img src={team2} animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10 , repeat:Infinity }}
                        className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl" />
                    
                </div>
                <div className='flex-1 ml-20'>
                    <motion.h1 animate={{ x: 40 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest
                        <motion.span animate={{ color: ['#ff5733', '#33ff89', '#bfff33'] }} transition={{ duration: 1.5, repeat: Infinity }}> Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Discover the latest job opportunities tailored for you! Find exciting roles in various industries, from tech to healthcare, with competitive salaries and career growth. Apply now and boost your future!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;