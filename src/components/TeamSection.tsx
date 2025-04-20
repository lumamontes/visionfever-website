"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import SectionTitle from "./SectionTitle";
import { team } from "@/data/team";

interface Props {
    data: {
        title: string;
        description: string;
    };
    imageAtRight?: boolean; // Making this prop optional with ?
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const TeamSection: React.FC<Props> = ({ data, imageAtRight }) => {
    const { title, description } = data;

    return (
        <section className="py-16 lg:py-24">
            <motion.div
                className="container mx-auto px-4 md:px-6"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        className="flex flex-col w-full"
                        variants={childVariants}
                    >
                        <SectionTitle>
                            <h3 className="text-3xl font-bold lg:text-4xl">
                                {title}
                            </h3>
                        </SectionTitle>

                        <p className="mt-4 text-lg leading-relaxed text-foreground-accent max-w-2xl mx-auto">
                            {description}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                    {team.map((member, index) => (
                        <motion.div 
                            key={member.name + index}
                            className="flex flex-col items-center border border-hero-red dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            variants={childVariants}
                        >
                            <div className="w-full relative pb-[100%] mx-auto bg-white ">
                                <Image 
                                    src={member.avatar} 
                                    alt={`${member.name} - ${member.role}`}
                                    fill
                                    className="object-cover"
                                    quality={90}
                                />
                            </div>
                            <div className="p-6 text-center w-full">
                                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                                <p className="text-foreground-accent">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default TeamSection