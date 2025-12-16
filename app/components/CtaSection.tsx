export default function CtaSection() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="flex flex-col gap-6 items-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl lg:text-[56px] font-bold leading-tight text-gray-900">
                        Recupera Tu Tiempo. <span className="text-primary">Enfócate En Crecer.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-[24px] text-gray-900 leading-relaxed max-w-3xl">
                        DILI automatiza lo pesado para que te dediques a hacer brillar tu negocio. Empieza Ahora.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <button className="px-8 py-4 bg-black text-white text-[22px] font-medium rounded-xl hover:bg-gray-800 transition-colors">
                            Empieza Hoy
                        </button>
                        <button className="px-8 py-4 bg-white text-black text-[22px] font-medium rounded-xl border-2 border-black hover:bg-gray-50 transition-colors">
                            Ver Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
