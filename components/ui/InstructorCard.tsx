import Image from "next/image";
import { Star, Users } from "lucide-react";

interface Props {
    image: string;
    name: string;
    role: string;
    students: string;
    rating: number;
}

export default function InstructorCard({
    image,
    name,
    role,
    students,
    rating,
}: Props) {
    return (
        <div className="rounded-3xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            <h3 className="mt-6 text-xl font-bold">{name}</h3>

            <p className="mt-2 text-gray-500">{role}</p>

            <div className="mt-6 flex items-center justify-center gap-5 text-sm">
                <div className="flex items-center gap-2">
                    <Users size={16} />
                    {students}
                </div>

                <div className="flex items-center gap-1">
                    <Star
                        fill="#FBBF24"
                        className="text-yellow-400"
                        size={16}
                    />
                    {rating}
                </div>
            </div>

            <button className="mt-8 rounded-xl border border-violet-600 px-6 py-3 font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white">
                View Profile
            </button>
        </div>
    );
}
