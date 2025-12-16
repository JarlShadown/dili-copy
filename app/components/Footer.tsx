import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">

                {/* Banner CTA Removed - Moved to CtaSection.tsx */}

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Image src="/dili_Orange.svg" alt="Dili Logo" width={80} height={32} className="h-8 w-auto brightness-0 invert" />
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                        <Link href="#features" className="hover:text-primary transition-colors">Beneficios</Link>
                        <Link href="#value-prop" className="hover:text-primary transition-colors">Características</Link>
                        <Link href="#pricing" className="hover:text-primary transition-colors">Precios</Link>
                        <Link href="#faq" className="hover:text-primary transition-colors">FAQs</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div>© 2025 Dili. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies Settings</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
