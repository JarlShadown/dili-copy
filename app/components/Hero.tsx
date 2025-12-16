import { ArrowRight, Flame, BarChart3, LayoutDashboard, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-12 pb-20 overflow-hidden bg-linear-to-b from-white to-surface-beige/30">
            <div className="container mx-auto px-4 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-surface-peach border border-surface-peach">
                    <div className="flex items-center gap-1">
                        <Zap size={14} className="text-primary fill-primary" />
                        <span className="text-xs font-semibold text-primary/80 tracking-wide uppercase">
                            Nuevo Lanzamiento
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                    Crece Sin <span className="font-extrabold text-gray-900">Complicarte</span>
                </h1>

                <p className="max-w-xl mx-auto text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                    Vende en automático, decide con datos y crece sin estrés.
                </p>

                {/* CTA */}
                <div className="flex items-center justify-center mb-10">
                    <button className="px-6 py-3 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all shadow-md flex items-center gap-2">
                        Empezar Gratis <ArrowRight size={18} />
                    </button>
                </div>

                {/* Video Placeholder / App Interface */}
                <div className="relative mx-auto max-w-5xl rounded-3xl border border-primary/10 bg-white p-2 shadow-2xl shadow-primary/10">
                    <div className="aspect-video rounded-2xl bg-gray-50 overflow-hidden relative group cursor-pointer border border-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-gray-900/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="mt-10 flex flex-col items-center">
                    <p className="text-sm font-bold text-gray-900 mb-8">
                        <span className="text-primary">Más de 50+ negocios</span> venden más rápido con Dili
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                        {/* Replaced with icon placeholders close to Figma */}
                        <div className="flex items-center gap-2 font-bold text-gray-800"><LayoutDashboard size={20} /> Google</div>
                        <div className="flex items-center gap-2 font-bold text-gray-800"><Zap size={20} /> Stripe</div>
                        <div className="flex items-center gap-2 font-bold text-gray-800"><BarChart3 size={20} /> Spotify</div>
                        <div className="flex items-center gap-2 font-bold text-gray-800"><Flame size={20} /> Airbnb</div>
                        <div className="flex items-center gap-2 font-bold text-gray-800"><ArrowRight size={20} /> TikTok</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
