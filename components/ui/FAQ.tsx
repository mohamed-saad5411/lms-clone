"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How do I enroll in a course?",
        answer:
            "Simply choose your course, complete the payment process, and start learning immediately.",
    },
    {
        question: "Will I receive a certificate?",
        answer:
            "Yes, certificates are awarded after successfully completing eligible courses.",
    },
    {
        question: "Can I access courses forever?",
        answer:
            "Yes, all purchased courses come with lifetime access.",
    },
    {
        question: "Are courses mobile friendly?",
        answer:
            "Absolutely. You can learn from desktop, tablet, or mobile devices.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState<number | null>(0);

    return (
        <section className="py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <span className="font-semibold text-violet-600">
                        FAQ
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="mt-14 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-2xl border"
                        >
                            <button
                                onClick={() =>
                                    setActive(active === index ? null : index)
                                }
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`transition ${active === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {active === index && (
                                <div className="border-t px-6 py-5 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}