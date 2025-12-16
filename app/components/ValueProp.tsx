import { ArrowRight, Flame, BarChart3, LayoutDashboard, Zap, Box, DollarSign } from "lucide-react";

export default function ValueProp() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        De Caos A <span className="text-primary">Claridad.</span>
                        <br />
                        De Estrés A <span className="text-primary">Crecimiento.</span>
                    </h2>
                    <p className="text-gray-500 font-medium text-lg">Estos son los 3 cambios que vas a experimentar</p>
                </div>

                {/* New 2-Column Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* LEFT COLUMN (Stack of 2 Cards) */}
                    <div className="flex flex-col gap-6">

                        {/* Card 1: Vende Más Rápido */}
                        <div className="group relative rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow">
                            {/* Visuals Top */}
                            <div className="p-8 pb-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl font-bold text-gray-900">3x</span>
                                    <div className="flex text-primary/30">
                                        <ArrowRight className="w-8 h-8 -ml-2" />
                                        <ArrowRight className="w-8 h-8 -ml-4 opacity-60" />
                                        <ArrowRight className="w-8 h-8 -ml-4 opacity-30" />
                                    </div>
                                </div>
                                <div className="text-primary">
                                    {/* Icon placeholder (Cash/System) */}
                                    <LayoutDashboard className="w-10 h-10 text-primary" />
                                </div>
                            </div>

                            {/* Content Gradient Bottom */}
                            <div className="p-8 pt-4 bg-linear-to-t from-surface-peach to-white/0">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Vende Más Rápido</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Reduce el tiempo de cada venta de minutos a segundos.<br />
                                    Interfaz intuitiva que tu equipo aprende desde el primer día.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Controla Sin Estrés */}
                        <div className="group relative rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow">
                            {/* Visuals Top - Inventory Flow */}
                            <div className="p-10 flex items-center justify-center gap-8">
                                <div className="p-4 bg-gray-800 text-white rounded-2xl shadow-md">
                                    <LayoutDashboard className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-16 h-0.5 bg-primary/40"></div>
                                    <div className="w-16 h-0.5 bg-primary/40"></div>
                                </div>
                                <div className="p-4 bg-primary text-white rounded-2xl shadow-md">
                                    <Box className="w-8 h-8" />
                                </div>
                            </div>

                            {/* Content Gradient Bottom */}
                            <div className="p-8 bg-linear-to-t from-surface-peach to-white/0">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Controla Sin Estrés</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Inventario automático que te permite saber qué vendes y qué te deja dinero.
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN (Single Tall Card) */}
                    <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col">

                        {/* Visuals Top - The 4 Steps */}
                        <div className="flex-1 p-8 flex items-center justify-center">
                            <div className="grid grid-cols-4 gap-4 w-full max-w-md">
                                {[
                                    { num: "1", icon: <LayoutDashboard className="w-6 h-6" />, color: "bg-gray-800 text-white" },
                                    { num: "2", icon: <BarChart3 className="w-6 h-6" />, color: "bg-surface-peach text-primary" },
                                    { num: "3", icon: <Flame className="w-6 h-6" />, color: "bg-surface-peach text-primary" }, // Placeholder for chart icon
                                    { num: "4", icon: <DollarSign className="w-6 h-6" />, color: "bg-primary text-white" },
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4">
                                        <span className="text-2xl font-bold">{step.num}</span>
                                        <div className={`w-full aspect-square rounded-2xl flex items-center justify-center shadow-sm ${step.color}`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Gradient Bottom - Decide */}
                        <div className="p-8 pt-12 bg-linear-to-t from-surface-peach to-white/0">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Decide Con Claridad</h3>
                            <p className="text-gray-600 font-medium leading-relaxed mb-1">
                                Reportes que entiendes en 10 segundos, no en horas.
                            </p>
                            <p className="text-gray-600 font-medium">
                                Datos claros para decisiones inteligentes.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
