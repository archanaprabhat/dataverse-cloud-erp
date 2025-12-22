import Image from "next/image";

export default function Marquee() {
  const logos = [
    "/logos/1.svg", "/logos/2.svg", "/logos/3.svg", "/logos/4.svg", "/logos/5.svg",
    "/logos/1.svg", "/logos/2.svg", "/logos/3.svg", "/logos/4.svg", "/logos/5.svg",
    "/logos/1.svg", "/logos/2.svg", "/logos/3.svg", "/logos/4.svg", "/logos/5.svg",
    "/logos/1.svg", "/logos/2.svg", "/logos/3.svg", "/logos/4.svg", "/logos/5.svg",
  ];

  return (
    <div className="w-full overflow-hidden bg-background py-16 relative z-20 group">
       <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10"></div>
       <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10"></div>
       
      <div className="flex w-max animate-scroll gap-16 items-center group-hover:pause">
        {logos.map((src, i) => (
          <div key={i} className="relative h-12 w-32 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
             <Image src={src} alt={`Customer ${i}`} fill className="object-contain" />
          </div>
        ))}
        {/* Duplicate for infinite loop effect if needed, but the array is already duplicated */}
      </div>
      
      {/* Tooltip/Hover Effect Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-1 rounded flex items-center gap-2">
         Meet our customers 
         <span className="text-dataverse-orange">→</span>
      </div>
    </div>
  );
}
