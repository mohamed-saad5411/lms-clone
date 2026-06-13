import Image from "next/image";
import { Star } from "lucide-react";

interface Props {
    image: string;
    name: string;
    role: string;
    review: string;
}

export default function TestimonialCard({
    image,
    name,
    role,
    review,
}: Props) {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                    />
                ))}
            </div>

            <p className="mt-6 leading-8 text-gray-600">
                "{review}"
            </p>

            <div className="mt-8 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>
                    <h3 className="font-bold">{name}</h3>

                    <p className="text-sm text-gray-500">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}