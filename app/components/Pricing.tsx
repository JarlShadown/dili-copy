import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Precios Transparentes</h2>
                    <p className="text-gray-500">Sin comisiones ocultas. Cancela cuando quieras.</p>

                    <div className="inline-flex mt-6 p-1 bg-gray-100 rounded-full">
                        <button className="px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-sm">Mensual</button>
                        <button className="px-6 py-2 text-gray-500 text-sm font-medium hover:text-gray-900">Anual</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* Tier 1: Gratis */}
                    <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-lg hover:border-primary/50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-500 mb-2">Inicial</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-gray-900">$0</span>
                            <span className="text-gray-500">/mes</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {["1 Usuario", "50 Productos", "Reportes básicos"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary" /> {item}
                                </li>
                            ))}
                            <li className="flex items-center gap-3 text-sm text-gray-400 box-decoration-slice line-through">
                                <Check className="w-5 h-5 text-gray-300" /> Soporte prioritario
                            </li>
                        </ul>
                        <button className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                            Empezar Gratis
                        </button>
                    </div>

                    {/* Tier 2: Pro */}
                    <div className="relative p-8 rounded-3xl border-2 border-primary bg-white shadow-2xl scale-105 z-10">
                        <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-8 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Popular
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Crecimiento</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-gray-900">$299</span>
                            <span className="text-gray-500">/mes</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {["3 Usuarios", "Productos Ilimitados", "Reportes Avanzados", "Control de Inventario", "Soporte WhatsApp"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-900">
                                    <div className="p-1 rounded-full bg-primary/10 text-primary">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 px-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all">
                            Prueba 14 días gratis
                        </button>
                    </div>

                    {/* Tier 3: Enterprise */}
                    <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-lg hover:border-primary/50 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-500 mb-2">Empresas</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-gray-900">$599</span>
                            <span className="text-gray-500">/mes</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {["Usuarios Ilimitados", "Multi-sucursal", "API Access", "Gerente de Cuenta"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-5 h-5 text-primary" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
                            Contactar Ventas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
