export default function TrustedCompanies() {
    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Netflix",
        "Spotify",
        "Adobe",
    ];

    return (
        <section className="border-y bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
                    Trusted by teams at
                </p>

                <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
                    {companies.map((company) => (
                        <div
                            key={company}
                            className="flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 py-6 transition hover:border-violet-300 hover:bg-violet-50"
                        >
                            <span className="text-lg font-bold text-gray-700">
                                {company}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}