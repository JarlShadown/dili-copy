"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const faqs = [
        { q: "¿Necesito tarjeta de crédito para la prueba?", a: "No, puedes empezar tu prueba de 14 días sin ingresar datos de pago." },
        { q: "¿Puedo cancelar en cualquier momento?", a: "Sí, no hay contratos forzosos. Cancelas cuando quieras desde tu panel." },
        { q: "¿Qué incluye el soporte?", a: "Soporte por chat y correo electrónico. El plan Crecimiento incluye soporte prioritario por WhatsApp." },
        { q: "¿Funciona en celular?", a: "Dili es 100% responsive y funciona perfectamente en tu celular, tablet o computadora." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 bg-surface-beige/30">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:border-gray-200"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900">{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400 shrink-0" />
                                )}
                            </button>

                            <div className={cn(
                                "px-6 pb-6 text-gray-600 transition-all",
                                openIndex === i ? "block animate-in slide-in-from-top-2" : "hidden"
                            )}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
