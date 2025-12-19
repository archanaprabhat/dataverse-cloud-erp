"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
    link: string;
    reverse?: boolean;
}

const ProductCard = ({ title, description, imageSrc, buttonText, link, reverse }: ProductCardProps) => (
    <div className={`flex flex-col gap-12 py-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-center`}>
         <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:padding-r-12">
            <h3 className="text-4xl lg:text-5xl font-normal text-mistral-dark dark:text-white leading-tight" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="text-xl font-light text-gray-700 dark:text-gray-300 max-w-md">{description}</p>
            
            <Link href={link} className="inline-block mt-4">
                <button className="group flex items-center justify-between gap-4 px-4 py-3 border-b border-mistral-dark dark:border-white text-mistral-dark dark:text-white hover:opacity-70 transition-opacity w-fit min-w-[200px]">
                    <span className="text-sm font-medium uppercase tracking-wide">{buttonText}</span>
                    <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 group-hover:translate-x-1 transition-transform">
                        <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"/>
                        <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"/>
                        <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"/>
                        <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"/>
                        <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"/>
                    </svg>
                </button>
            </Link>
         </div>

         <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px]">
            <Image src={imageSrc} alt={title} fill className="object-contain" />
         </div>
    </div>
);

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-24 relative">
             {/* Main Scroll Container - Reduced height for less whitespace */}
             <div className="h-[150vh] relative flex flex-col items-center justify-center overflow-hidden"> 
                 
                 {/* Parallax Background Layer */}
                 <div className="absolute inset-0 z-0">
                    <Image 
                        src="/dataverse-parallax-bg.png" 
                        alt="Background Texture" 
                        fill 
                        className="object-cover opacity-40 mix-blend-soft-light animate-parallax-slow" 
                    />
                 </div>

                 {/* Sticky Center Content */}
                 <div className="sticky top-1/2 -translate-y-1/2 z-10 w-full max-w-screen-xl mx-auto px-6">
                    
                    {/* Float Item 1 (Left) */}
                    <div className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 w-48 md:w-64 aspect-square animate-float-1 z-20">
                        <Image src="/float-1.png" alt="Data Analytics" fill className="object-contain drop-shadow-2xl" />
                    </div>

                    {/* Float Item 2 (Right) */}
                    <div className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 w-48 md:w-64 aspect-square animate-float-2 z-20">
                        <Image src="/float-2.png" alt="Code Algorithm" fill className="object-contain drop-shadow-2xl" />
                    </div>

                     {/* Float Item 3 (Bottom Center - subtly behind text or just below) */}
                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-40 md:w-56 aspect-square animate-float-3 z-0 opacity-80">
                         <Image src="/float-3.png" alt="AI Core" fill className="object-contain drop-shadow-xl" />
                    </div>

                    <div className="relative z-30">
                        <h2 className="text-5xl lg:text-8xl font-semibold tracking-tighter mb-6 transition-colors duration-500">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mistral-orange to-mistral-orange bg-[length:0%_100%] bg-no-repeat animate-reveal-text text-black/10 dark:text-white/10">
                                Get the job done faster.
                            </span>
                        </h2>
                        
                        <p className="text-xl font-light text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-8 opacity-0 animate-fade-in-up delay-300">
                           Your multilingual, multimodal Data assistant that can help with anything. Search, analyze, code, learning, automate, and collaborate.
                        </p>
                    </div>
                 </div>

                <style jsx>{`
                    @keyframes reveal {
                        0% { background-size: 0% 100%; color: rgba(0,0,0,0.1); }
                        100% { background-size: 100% 100%; color: #0f0f0f; }
                    }
                    .animate-reveal-text {
                        animation: reveal 1s linear forwards;
                        animation-timeline: view();
                        animation-range: entry 45% cover 55%;
                    }

                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-up {
                        animation: fadeInUp 0.8s ease-out forwards;
                        animation-timeline: view();
                        animation-range: entry 50% cover 60%;
                    }
                    
                    /* Parallax Floating Animations */
                    @keyframes floatInLeft {
                        from { transform: translateX(-150px) translateY(100px) rotate(-15deg) scale(0.8); opacity: 0; }
                        to { transform: translateX(0) translateY(-50%) rotate(-6deg) scale(1); opacity: 1; }
                    }
                    .animate-float-1 {
                        animation: floatInLeft 1s ease-out forwards;
                        animation-timeline: view();
                        animation-range: entry 20% cover 45%;
                    }

                    @keyframes floatInRight {
                        from { transform: translateX(150px) translateY(100px) rotate(15deg) scale(0.8); opacity: 0; }
                        to { transform: translateX(0) translateY(-50%) rotate(6deg) scale(1); opacity: 1; }
                    }
                    .animate-float-2 {
                        animation: floatInRight 1s ease-out forwards;
                        animation-timeline: view();
                        animation-range: entry 25% cover 50%;
                    }

                    @keyframes floatInBottom {
                         from { transform: translateX(-50%) translateY(150px) scale(0.5); opacity: 0; }
                        to { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
                    }
                    .animate-float-3 {
                        animation: floatInBottom 1s ease-out forwards;
                        animation-timeline: view();
                        animation-range: entry 30% cover 55%;
                    }

                    @keyframes slowParallax {
                        from { transform: scale(1.1); }
                        to { transform: scale(1); }
                    }
                    .animate-parallax-slow {
                        animation: slowParallax 10s ease-out forwards;
                        animation-timeline: view();
                        animation-range: entry 0% exit 100%;
                    }
                `}</style>
             </div>
        </div>

        <div className="flex flex-col gap-12">
            <ProductCard 
                title="Unified Data for all your work."
                description="Your multilingual, multimodal Data assistant..."
                imageSrc="/data-assistant.png"
                buttonText="Discover Data Assistant"
                link="/products/data-assistant"
            />
             <ProductCard 
                title="Custom Data solutions, deployable anywhere."
                description="Build and deploy Data apps with complete control..."
                imageSrc="/data-studio.png"
                buttonText="Discover Data Studio"
                link="/products/data-studio"
                reverse
            />
             <ProductCard 
                title="Enterprise-grade <br/> AI-powered coding."
                description="Transform development workflows with a Dataverse coding assistant..."
                imageSrc="/dataverse-code.png"
                buttonText="Discover Dataverse Code"
                link="/products/dataverse-code"
            />
            <ProductCard 
                title="Expert-led Data acceleration."
                description="Tailored, domain-specialized Data insights..."
                imageSrc="/data-services.png"
                buttonText="Discover services"
                link="/services"
                reverse
            />
        </div>
      </div>
    </section>
  );
}
