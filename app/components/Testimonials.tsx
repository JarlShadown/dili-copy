export default function Testimonials() {
    const reviews = [
        {
            quote: "Pensé que sería complicado, pero mi equipo aprendió a usarlo en una tarde. Es súper intuitivo.",
            author: "Ana Martínez",
            role: "Restaurante Tierra, MTY",
            avatar: "A"
        },
        {
            quote: "Perdía horas haciendo cortes de caja manualmente. Ahora con DILI todo es automático y puedo enfocarme en atender mejor a mis clientes.",
            author: "María González",
            role: "Café Bonito, CDMX",
            avatar: "M"
        },
        {
            quote: "Lo mejor de DILI es que puedo ver mis ventas desde mi casa. Ya no tengo que estar todo el día en el negocio para saber cómo va.",
            author: "Carlos Ramírez",
            role: "Tienda La Esquina, GDL",
            avatar: "C"
        }
    ];

    return (
        <section className="py-16 bg-surface-beige/50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        En cada paso. En cada logro.<br />
                        Dili es tu <span className="text-primary">aliado confiable.</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="text-4xl text-primary font-serif mb-4">“</div>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                {review.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                                    {review.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{review.author}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
