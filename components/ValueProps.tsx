import Image from "next/image";

export default function ValueProps() {
  const items = [
    { title: "Data intelligence, tailored to You.", desc: "Make your Data your own. Train, distill, fine-tune, and build with the world's best open source models." },
    { title: "Enterprise-grade. Agent-ready.", desc: "Deploy agents that execute, adapt, and deliver real results, with powerful orchestration, tooling, and safety." },
    { title: "Privacy-first.", desc: "Deploy and build with AI anywhere—on-premises, cloud, edge, devices, and more—while retaining full control of your data." },
    { title: "Deeply engaged solutioning and value delivery.", desc: "Hands-on assistance from the world's foremost applied AI scientists across deployment, solutioning, safety, and beyond." }
  ];

  return (
    <section className="relative mx-auto max-w-screen-2xl py-24 px-6 lg:px-12 bg-background">
       {/* Background Image Layer */}
       <div className="absolute inset-0 -z-10 size-full overflow-hidden opacity-50">
             <div className="relative h-full w-full">
                <Image 
                    src="/dataverse-abstract.webp" 
                    alt="Background Abstract" 
                    fill 
                    className="object-cover opacity-60 mix-blend-soft-light"
                />
             </div>
       </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-x-24">
        
        {/* Sticky Left Column: Heading */}
        <div className="md:w-1/2 relative">
             <div className="md:sticky md:top-1/3 md:h-auto">
                <h3 className="text-4xl lg:text-6xl font-sans tracking-tight text-dataverse-dark font-normal leading-tight">
                    Your Data future belongs in your hands.
                </h3>
             </div>
        </div>

        {/* Scrolling Right Column: Details */}
        <div className="md:w-1/2 flex flex-col divide-y divide-[#ECDAA2] border-y border-y-[#ECDAA2]">
             {items.map((item, idx) => (
                <div key={idx} className="flex flex-col py-16 gap-6">
                    <h4 className="text-2xl font-normal text-dataverse-dark">{item.title}</h4>
                    
                    <div className="flex gap-6 items-start">
                         {/* Icon */}
                        <div className="text-dataverse-orange shrink-0 mt-1">
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0039 10.9983L21.0039 8.00293L18.0086 8.00293L18.0086 10.9983L21.0039 10.9983Z" fill="currentColor"/>
                                <path d="M18.0117 7.99143L18.0117 4.99609L15.0164 4.99609L15.0164 7.99143L18.0117 7.99143Z" fill="currentColor"/>
                                <path d="M15.0117 4.99583L15.0117 2.00049L12.0164 2.00049L12.0164 4.99582L15.0117 4.99583Z" fill="currentColor"/>
                                <path d="M18.0117 13.9934L18.0117 10.998L15.0164 10.998L15.0164 13.9934L18.0117 13.9934Z" fill="currentColor"/>
                                <path d="M15.0039 10.9983L15.0039 8.00293L0.00382328 8.00293L0.00382315 10.9983L15.0039 10.9983Z" fill="currentColor"/>
                                <path d="M15.0117 17.0002L15.0117 14.0049L12.0164 14.0049L12.0164 17.0002L15.0117 17.0002Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <p className="text-lg font-light text-black/80 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
             ))}
        </div>

      </div>
    </section>
  );
}
