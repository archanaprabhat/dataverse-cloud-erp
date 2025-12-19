import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const text = "Dataverse. In Your Hands.";
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/dataverse-hero.png" 
            alt="Dataverse Hero" 
            fill 
            className="object-cover"
            priority
         />
         {/* Gradient Overlay applied via CSS/Tailwind if needed, but the image seems to have it or we use bg-hero-gradient on top */}
         {/* The original site has a specific gradient overlay div if the image itself isn't enough, but let's trust the image first or add a subtle one */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center justify-center gap-8 px-4 text-center mt-20">
        
        {/* Title Reveal */}
        <h1 className="text-white text-5xl md:text-7xl font-sans tracking-tight overflow-hidden leading-tight flex flex-wrap justify-center gap-x-2 md:gap-x-4">
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

        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl font-light opacity-0 animate-title delay-300" style={{ animationFillMode: 'forwards' }}>
            Configurable data platform for all businesses.
        </p>

        {/* Search Input Simulation */}
        <div className="w-full max-w-lg mt-8 opacity-0 animate-[title-reveal_0.8s_ease-out_0.5s_forwards]">
            <div className="relative flex items-center bg-[#F7F5F0] rounded shadow-lg p-1.5">
                <input 
                    type="text" 
                    placeholder="Talk to Data Assistant" 
                    className="grow bg-transparent px-4 py-2 text-foreground placeholder:text-gray-500 outline-none text-sm"
                />
                <button className="bg-mistral-orange hover:bg-opacity-90 text-white rounded p-2 transition-colors">
                     <svg width="16" height="16" viewBox="0 0 32 32" fill="none" className="rotate-90">
                        <path d="M12.625 24.5L12.625 7.5" stroke="currentColor" strokeWidth="3"/>
                        <path d="M5.625 14.5L12.625 7.5L19.625 14.5" stroke="currentColor" strokeWidth="3"/>
                    </svg>
                </button>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 opacity-0 animate-[title-reveal_0.8s_ease-out_0.7s_forwards]">
            <Link href="/contact" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-mistral-beige-deep transition-colors">
                <span>Get a demo</span>
                <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 group-hover:translate-x-1 transition-transform">
                    <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"/>
                    <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"/>
                    <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"/>
                    <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"/>
                    <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"/>
                </svg>
            </Link>
             <Link href="#" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-mistral-beige-deep transition-colors">
                <span>Start building</span>
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
    </div>
  );
}
