"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe, ChevronDown } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <header className="w-full max-w-[1200px] bg-white shadow-[0px_2.88px_7.07px_0px_rgba(0,0,0,0.05)] rounded-lg px-6 py-2 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image src="/dili_Orange.svg" alt="Dili Logo" width={60} height={24} className="h-8 w-auto" priority />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 mx-auto">
                    <Link href="#features" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                        Características
                    </Link>
                    <Link href="#pricing" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                        Precios
                    </Link>
                    <Link href="#faq" className="text-base font-medium text-gray-900 hover:text-primary transition-colors">
                        FAQs
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Selector */}
                    <button className="flex items-center gap-1 text-gray-900 hover:text-primary transition-colors">
                        <Globe size={20} className="stroke-[1.5]" />
                        <ChevronDown size={16} className="mt-0.5" />
                    </button>

                    {/* Auth Buttons */}
                    <Link
                        href="/login"
                        className="px-5 py-2 text-base font-medium text-gray-900 border border-black rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Iniciar Sesión
                    </Link>
                    <Link
                        href="/register"
                        className="px-5 py-2 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Agendar Demo
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <span className={cn("block w-full h-0.5 bg-current transition-all", isOpen ? "rotate-45 translate-y-2" : "")} />
                        <span className={cn("block w-full h-0.5 bg-current transition-all", isOpen ? "opacity-0" : "")} />
                        <span className={cn("block w-full h-0.5 bg-current transition-all", isOpen ? "-rotate-45 -translate-y-2" : "")} />
                    </div>
                </button>

            </header>

            {/* Mobile Menu Dropdown (Outside the floating header, but anchored) */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full max-w-[1200px] px-4 md:hidden">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4">
                        <Link
                            href="#features"
                            className="text-base font-medium text-gray-600 hover:text-primary p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Características
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-base font-medium text-gray-600 hover:text-primary p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Precios
                        </Link>
                        <Link
                            href="#faq"
                            className="text-base font-medium text-gray-600 hover:text-primary p-2"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQs
                        </Link>
                        <hr className="border-gray-100" />
                        <div className="flex flex-col gap-3">
                            <Link
                                href="/login"
                                className="text-center px-4 py-2 text-base font-medium text-gray-900 border border-black rounded-lg hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Iniciar Sesión
                            </Link>
                            <Link
                                href="/register"
                                className="text-center px-4 py-2 text-base font-medium text-white bg-black rounded-lg hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                Agendar Demo
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
