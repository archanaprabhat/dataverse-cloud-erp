import Image from "next/image";

export default function ValueProps() {
  const items = [
    { title: "Data intelligence, tailored to You.", desc: "Make your Data your own. Train, distill, fine-tune, and build with the world's best open source models." },
    { title: "Enterprise-grade. Agent-ready.", desc: "Deploy agents that execute, adapt, and deliver real results, with powerful orchestration, tooling, and safety." },
    { title: "Privacy-first.", desc: "Deploy and build with AI anywhere—on-premises, cloud, edge, devices, and more—while retaining full control of your data." },
    { title: "Deeply engaged solutioning and value delivery.", desc: "Hands-on assistance from the world's foremost applied AI scientists across deployment, solutioning, safety, and beyond." }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-lg overflow-hidden">
                 <Image src="/data-feature.png" alt="Dataverse Features" fill className="object-cover" />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-12">
                <h3 className="text-4xl lg:text-5xl font-sans tracking-tight text-mistral-dark dark:text-mistral-beige font-normal">
                    Your Data future belongs in your hands.
                </h3>
                
                <div className="flex flex-col border-t border-mistral-orange/30 divide-y divide-mistral-orange/30">
                    {items.map((item, idx) => (
                        <div key={idx} className="py-8 flex gap-6">
                            {/* Icon */}
                            <div className="text-mistral-orange flex-shrink-0 mt-1">
                                <svg width="24" height="24" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0039 10.9983L21.0039 8.00293L18.0086 8.00293L18.0086 10.9983L21.0039 10.9983Z" fill="currentColor"/>
                                    <path d="M18.0117 7.99143L18.0117 4.99609L15.0164 4.99609L15.0164 7.99143L18.0117 7.99143Z" fill="currentColor"/>
                                    <path d="M15.0117 4.99583L15.0117 2.00049L12.0164 2.00049L12.0164 4.99582L15.0117 4.99583Z" fill="currentColor"/>
                                    <path d="M18.0117 13.9934L18.0117 10.998L15.0164 10.998L15.0164 13.9934L18.0117 13.9934Z" fill="currentColor"/>
                                    <path d="M15.0039 10.9983L15.0039 8.00293L0.00382328 8.00293L0.00382315 10.9983L15.0039 10.9983Z" fill="currentColor"/>
                                    <path d="M15.0117 17.0002L15.0117 14.0049L12.0164 14.0049L12.0164 17.0002L15.0117 17.0002Z" fill="currentColor"/>
                                </svg>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xl font-medium text-mistral-dark dark:text-white">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
