"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems: { [key: string]: { title: string; desc: string }[] } = {
  Products: [
    { title: "Data Studio", desc: "Analytics tooling" },
    { title: "Data Assistant", desc: "AI insights" },
    { title: "Dataverse Code", desc: "Intelligent pipelines" },
    { title: "Dataverse Compute", desc: "Secure cloud" },
    { title: "Frontier models", desc: "Data infrastructure" },
    { title: "Enterprise search", desc: "Self learning" },
    { title: "Contextual understanding", desc: "Semantic analysis" },
    { title: "Why Dataverse Compute", desc: "Dataverse Compute features" },
  ],
  Solutions: [
    { title: "Finance", desc: "Strategy" },
    { title: "Legal", desc: "Compliance" },
    { title: "Healthcare", desc: "Diagnostics" },
  ],
  Research: [
    { title: "Publications", desc: "Latest papers" },
    { title: "News", desc: "Blog updates" },
  ],
  Resources: [
      { title: "Documentation", desc: "Guides" },
      { title: "Community", desc: "Forums" },
  ],
  Company: [
      { title: "About", desc: "Our story" },
      { title: "Careers", desc: "Join us" },
  ]
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        onMouseLeave={() => { setActiveMenu(null); setIsHovering(false); }}
    >
       {/* Background Overlay for Menu */}
       <div 
         className={`absolute inset-x-0 top-0 bg-mistral-beige transition-all duration-500 ease-in-out border-b border-white/20 shadow-lg backdrop-blur-xl
         ${activeMenu ? 'h-[400px] opacity-100' : 'h-0 delay-200 opacity-0 pointer-events-none'}`}
         style={{ background: 'rgba(247, 245, 240, 0.95)' }} // High opacity beige for legibility
       ></div>

       {/* Gradient Shadow for standard nav */}
       <div 
         className={`absolute inset-0 bg-menu-gradient h-[120px] pointer-events-none z-0 transition-opacity duration-300 ${activeMenu ? 'opacity-0' : 'opacity-100'}`}
       ></div>

       <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex size-10 items-center justify-center group">
            <div className={`font-bold text-xl tracking-tighter transition-colors duration-300 group-hover:scale-105 ${activeMenu ? 'text-black' : 'text-white'}`}>
                Dataverse
            </div> 
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-10 text-sm font-medium">
                {Object.keys(menuItems).map((item) => (
                    <li 
                        key={item} 
                        className="relative cursor-pointer group py-4"
                        onMouseEnter={() => { setActiveMenu(item); setIsHovering(true); }}
                    >
                        <span 
                            className={`transition-all duration-300 ease-in-out 
                            ${activeMenu ? 'text-black font-semibold' : 'text-white/90 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'}`}
                        >
                            {item}
                        </span>
                    </li>
                ))}
                 <li 
                    className="relative cursor-pointer group py-4"
                    onMouseEnter={() => { setActiveMenu(null); setIsHovering(false); }}
                 >
                        <Link href="/pricing" className={`transition-all duration-300 ease-in-out ${activeMenu ? 'text-black' : 'text-white/90 group-hover:text-white'}`}>
                            Pricing
                        </Link>
                 </li>
            </ul>

             <div className="flex items-center gap-3">
                <Link href="https://console.mistral.ai/" target="_blank" 
                    className={`relative text-xs font-medium px-4 py-2 rounded transition-all duration-300 flex items-center gap-2 backdrop-blur-sm border 
                        ${activeMenu ? 'bg-mistral-orange text-white border-transparent hover:bg-mistral-orange/80' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-mistral-dark hover:border-transparent'}
                    group overflow-hidden`}>
                    <span className="relative z-10">Try Data Studio</span>
                     <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M7.39166 4.93066H4.92969V7.39936H7.39166V4.93066Z" fill="currentColor"/>
                        <path d="M4.92681 2.46875H2.46484V4.93744H4.92681V2.46875Z" fill="currentColor"/>
                        <path d="M2.46197 0H0V2.46869H2.46197V0Z" fill="currentColor"/>
                        <path d="M4.92681 7.39941H2.46484V9.86811H4.92681V7.39941Z" fill="currentColor"/>
                        <path d="M2.46197 9.86133H0V12.33H2.46197V9.86133Z" fill="currentColor"/>
                    </svg>
                </Link>
                 <Link href="/contact" 
                    className={`relative text-xs font-medium px-4 py-2 rounded transition-all duration-300 backdrop-blur-sm border 
                    ${activeMenu ? 'bg-transparent text-black border-black/20 hover:bg-black/5' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-mistral-dark hover:border-transparent'} 
                    group`}>
                    <span className="relative z-10">Talk to sales</span>
                </Link>
             </div>
        </div>

        {/* Dropdown Content */}
        <div 
             className={`absolute top-[80px] left-0 w-full px-12 pb-12 transition-all duration-500 ease-out transform
             ${activeMenu ? 'opacity-100 translate-y-0 visible delay-100' : 'opacity-0 -translate-y-4 invisible'}`}
        >
             <div className="container mx-auto grid grid-cols-4 gap-y-8 gap-x-4 pt-8 border-t border-black/5">
                {activeMenu && menuItems[activeMenu]?.map((subItem, idx) => (
                    <div key={idx} className="flex flex-col gap-1 group/item cursor-pointer">
                         <h4 className="text-sm font-semibold text-mistral-dark group-hover/item:text-mistral-orange transition-colors">{subItem.title}</h4>
                         <p className="text-sm text-gray-500">{subItem.desc}</p>
                    </div>
                ))}
             </div>
        </div>
       </nav>
    </div>
  );
}
