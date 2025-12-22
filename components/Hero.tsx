import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const text = "Dataverse. In Your Hands.";
  
  return (
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Area - Empty top left matching image composition */}
            <div className="flex flex-col items-start text-left gap-8 max-w-2xl">
                 <h1 className="text-mistral-dark dark:text-white text-5xl md:text-7xl font-sans tracking-tight leading-tight flex flex-wrap gap-x-3">
                     {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap">
                          {word.split("").map((char, charIndex) => (
                            <span 
                                key={wordIndex + "-" + charIndex} 
                                className="inline-block animate-title"
                                style={{ animationDelay: `${(wordIndex * 2 + charIndex) * 50}ms` }}
                            >
                                {char}
                            </span>
                          ))}
                        </span>
                     ))}
                 </h1>

                <p className="text-gray-600 dark:text-gray-300 text-xl font-light opacity-0 animate-title delay-300 max-w-lg" style={{ animationFillMode: 'forwards' }}>
                    Configurable data platform for all businesses.
                </p>

                {/* Search Input */}
                <div className="w-full max-w-md opacity-0 animate-[title-reveal_0.8s_ease-out_0.5s_forwards]">
                    <div className="relative flex items-center bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg shadow-sm p-1.5 focus-within:ring-2 ring-mistral-orange/50 transition-shadow">
                        <input 
                            type="text" 
                            placeholder="Talk to Data Assistant" 
                            className="grow bg-transparent px-4 py-3 text-mistral-dark dark:text-white placeholder:text-gray-400 outline-none text-base"
                        />
                        <button className="bg-mistral-orange hover:bg-mistral-orange/90 text-white rounded-md p-2.5 transition-colors">
                            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="rotate-90">
                                <path d="M12.625 24.5L12.625 7.5" stroke="currentColor" strokeWidth="3"/>
                                <path d="M5.625 14.5L12.625 7.5L19.625 14.5" stroke="currentColor" strokeWidth="3"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-2 opacity-0 animate-[title-reveal_0.8s_ease-out_0.7s_forwards]">
                     <Link href="/contact" className="group flex items-center gap-2 text-mistral-dark dark:text-white border-b border-mistral-dark dark:border-white pb-1 hover:opacity-70 transition-opacity">
                        <span className="text-sm font-medium uppercase tracking-wide">Get a demo</span>
                        <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 group-hover:translate-x-1 transition-transform">
                            <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"/>
                            <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"/>
                            <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"/>
                            <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"/>
                            <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"/>
                        </svg>
                    </Link>
                     <Link href="#" className="group flex items-center gap-2 text-mistral-dark dark:text-white border-b border-mistral-dark dark:border-white pb-1 hover:opacity-70 transition-opacity">
                        <span className="text-sm font-medium uppercase tracking-wide">Start building</span>
                         <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 group-hover:translate-x-1 transition-transform">
                            <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"/>
                            <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"/>
                            <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"/>
                            <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"/>
                            <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Right Image Area - The "distinct" confined image */}
            <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
                {/* 
                   We use a contained image styling here rather than full-screen background.
                   It aligns with the "top-left empty" composition request by placing the image visually on the right/center
                   allowing the text on the left to breathe.
                */}
                <div className="relative w-full h-full max-w-2xl overflow-hidden rounded-2xl">
                     <Image 
                        src="/dataverse-hero-subtle.png" 
                        alt="Dataverse Abstract" 
                        fill 
                        className="object-contain lg:object-cover scale-110 hover:scale-105 transition-transform duration-[2s]"
                        priority
                     />
                     {/* Subtle overlay gradient to blend edges if needed */}
                     <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/10 pointer-events-none" />
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
