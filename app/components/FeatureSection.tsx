import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
    title: string;
    description: string;
    features: string[];
    imageSrc?: string;
    reversed?: boolean;
}

export default function FeatureSection({
    title,
    description,
    features,
    imageSrc,
    reversed = false
}: FeatureSectionProps) {
    return (
        <section className="py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-16",
                    reversed && "lg:flex-row-reverse"
                )}>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>

                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image/Visual Placeholder */}
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-xl">
                            {imageSrc ? (
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white flex items-center justify-center text-gray-300">
                                    {/* Placeholder Content */}
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                                        <div className="h-4 bg-gray-200 rounded w-32 mx-auto mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
                                    </div>
                                </div>
                            )}

                            {/* Decorative Element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
