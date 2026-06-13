import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 to-indigo-600 p-12 text-white md:p-20">
                    <div className="max-w-3xl">
                        <span className="font-semibold text-violet-200">
                            Become An Instructor
                        </span>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            Share Your Knowledge With Thousands Of Students
                        </h2>

                        <p className="mt-6 text-lg text-violet-100">
                            Join our community of expert instructors and start
                            earning while helping others learn.
                        </p>

                        <button className="mt-10 flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 transition hover:scale-105">
                            Start Teaching
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}