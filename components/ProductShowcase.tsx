"use client";

import Image from "next/image";
import Link from "next/link";
import UnifiedDataSection from "./UnifiedDataSection";

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
            <h3 className="text-4xl lg:text-5xl font-normal text-dataverse-dark leading-tight" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="text-xl font-light text-gray-700 max-w-md">{description}</p>
            
            <Link href={link} className="inline-block mt-4">
                <button className="group flex items-center justify-between gap-4 px-4 py-3 border-b border-dataverse-dark text-dataverse-dark hover:opacity-70 transition-opacity w-fit min-w-[200px]">
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
    <section className="bg-background">
      {/* 
        ADVANCED SCROLL ANIMATION SECTION
        Implemented in separate component for cleaner code and performance isolation.
      */}
      <UnifiedDataSection />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Regular Product Cards Section */}
        <div className="flex flex-col gap-12 relative z-20 bg-background pt-24">
             {/* Note: UnifiedDataSection handles its own height/stickiness. This flows naturally after it. */}
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
