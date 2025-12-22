"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import clsx from "clsx";

export default function UnifiedDataSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 1. Text Reveal Animation (0% - 25%)
  // reveals the "Unified Data" text by masking/clipping or simple opacity stagger
  // Here we simulate the "writing" effect by scaling a clip path from left to right.
  const textReveal1 = useTransform(smoothProgress, [0.05, 0.25], ["0%", "100%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.05], [0, 1]);

  // Subheadline fade in (starts after main text)
  const subHeadOpacity = useTransform(smoothProgress, [0.25, 0.35], [0, 1]);
  const subHeadY = useTransform(smoothProgress, [0.25, 0.35], [20, 0]);

  // 2. Images Pop Up Sequence (30% - 70%)
  
  // Card 1: Data Analytics (Left)
  const card1Y = useTransform(smoothProgress, [0.3, 0.5], [1000, 0]); // Slide up from bottom
  const card1Rotate = useTransform(smoothProgress, [0.3, 0.5], [-15, -6]); // Rotate into place
  const card1Opacity = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);

  // Card 2: Code (Right)
  const card2Y = useTransform(smoothProgress, [0.4, 0.6], [1000, 0]);
  const card2Rotate = useTransform(smoothProgress, [0.4, 0.6], [15, 6]);
  const card2Opacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);

  // Card 3: AI (Bottom Center)
  const card3Y = useTransform(smoothProgress, [0.55, 0.75], [1000, 0]);
  const card3Scale = useTransform(smoothProgress, [0.55, 0.75], [0.5, 1]);
  const card3Opacity = useTransform(smoothProgress, [0.55, 0.65], [0, 1]);

  // 3. Final 3D Tilt (80% - 100%)
  // When scroll reaches near end, tilt everything slightly back
  const perspectiveRotateX = useTransform(smoothProgress, [0.8, 1], [0, 10]);
  const perspectiveScale = useTransform(smoothProgress, [0.8, 1], [1, 0.95]);


  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-container">
        
        <motion.div 
            style={{ rotateX: perspectiveRotateX, scale: perspectiveScale }}
            className="w-full h-full relative flex flex-col items-center justify-center transform-style-3d origin-center"
        >
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/dataverse-parallax-bg.png" 
                    alt="Background Texture" 
                    fill 
                    className="object-cover opacity-30 mix-blend-soft-light" 
                />
            </div>

            {/* ---- TEXT LAYER ---- */}
            <div className="relative z-30 text-center px-4 mb-12 lg:mb-0">
                <motion.div style={{ opacity: textOpacity }} className="relative">
                     {/* Base Ghost Text (Invisible/Dim) */}
                     <h2 className="text-5xl lg:text-8xl font-medium tracking-tight mb-4 text-gray-200/20 absolute inset-0 text-center mx-auto select-none">
                        Unified data <br className="hidden md:block" /> for all your work.
                     </h2>
                    
                    {/* Living Text (Reveals) */}
                     <h2 className="text-5xl lg:text-8xl font-medium tracking-tight mb-4 text-mistral-dark dark:text-black relative">
                        <motion.span 
                            style={{ width: textReveal1 }}
                            className="absolute top-0 left-0 bottom-0 h-full overflow-hidden whitespace-nowrap text-center mx-auto inset-x-0"
                        >
                             <span className="w-full block">Unified data <br className="hidden md:block" /> for all your work.</span>
                        </motion.span>
                       {/* Placeholder to keep dimensions correct */}
                        <span className="opacity-0">Unified data <br className="hidden md:block" /> for all your work.</span>
                     </h2>
                </motion.div>

                <motion.div style={{ opacity: subHeadOpacity, y: subHeadY }} className="mt-8">
                        <h3 className="text-2xl lg:text-4xl font-light text-gray-500">
                        Get the job done faster.
                        </h3>
                </motion.div>
            </div>

            {/* ---- IMAGES LAYER ---- */}
            
            {/* Image 1: Left */}
            <motion.div 
                style={{ y: card1Y, rotate: card1Rotate, opacity: card1Opacity }}
                className="absolute top-1/2 left-[5%] md:left-[10%] w-48 md:w-64 aspect-square z-20 -translate-y-1/2"
            >
                <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/20">
                    <Image src="/float-1.png" alt="Analytics" fill className="object-contain p-4" />
                </div>
            </motion.div>

            {/* Image 2: Right */}
            <motion.div 
                style={{ y: card2Y, rotate: card2Rotate, opacity: card2Opacity }}
                className="absolute top-[40%] right-[5%] md:right-[10%] w-56 md:w-72 aspect-video z-20 -translate-y-1/2"
            >
                <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/20">
                     <Image src="/float-2.png" alt="Code" fill className="object-contain p-4" />
                </div>
            </motion.div>

             {/* Image 3: Bottom Center */}
            <motion.div 
                 style={{ y: card3Y, scale: card3Scale, opacity: card3Opacity }}
                 className="absolute top-[70%] left-1/2 -translate-x-1/2 w-40 md:w-56 aspect-square z-10"
            >
                 <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm border border-white/20">
                     <Image src="/float-3.png" alt="AI" fill className="object-contain p-4" />
                 </div>
            </motion.div>

        </motion.div>
      </div>

      <style jsx global>{`
        .perspective-container {
            perspective: 1200px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
