import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const links = {
        "Why Dataverse": ["About us", "Our customers", "Careers", "Contact us"],
        "Products": ["Data Assistant", "Data Studio", "Dataverse Code", "Models"],
        "Explore": ["Research", "Documentation", "Community"],
        "Legal": ["Terms of service", "Privacy policy", "Data processing agreement"]
    }
  return (
    <footer className="bg-background border-t border-gray-200 dark:border-gray-800 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
            
            <div className="flex flex-col gap-8 w-full lg:w-1/3">
                 <div className="font-bold text-xl tracking-tighter text-dataverse-dark">Dataverse</div>
                 <p className="text-gray-600 font-light text-sm max-w-xs">
                    Dataverse. In your hands.
                 </p>
                 <div className="flex gap-4 items-center">
                    {/* Social placeholders */}
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                 </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-2/3">
                {Object.entries(links).map(([category, items]) => (
                    <div key={category} className="flex flex-col gap-4">
                        <h5 className="font-semibold text-sm text-dataverse-dark">{category}</h5>
                        <ul className="flex flex-col gap-2">
                            {items.map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-600 text-sm hover:text-dataverse-orange transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; 2025 Dataverse. All rights reserved.</p>
            <div className="flex gap-4">
                <span>San Francisco</span>
                <span>Paris</span>
                <span>London</span>
                <span>Munich</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
