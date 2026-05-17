export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-brand-cream">
            {/* Hero banner */}
            <div className="bg-brand-deep text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
                        Legal
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="mt-4 text-white/70 text-sm">Last updated: January 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-14 space-y-10 text-brand-text">

                {/* Intro */}
                <Section title="Introduction">
                    <p>
                        MP Immigration Srl, registered office Via Pattari, 6 – 20122 Milano (MI), Tax Code and VAT
                        number 07497690961 (named hereafter as "Data Controller"), informs you pursuant to art. 13 of
                        Legislative Decree n. 196/2003 (named hereafter as "Privacy Code"), and to art. 13 EU
                        Regulation no. 2016/679 (named hereafter as "GDPR"), that your data will be processed with
                        the following modalities and for the following purposes.
                    </p>
                </Section>

                {/* Objective */}
                <Section title="Objective of the Data Processing">
                    <p>
                        The Data Controller processes personal information (such as: name, surname, company name,
                        address, telephone number, e-mail, passport details, visa information, immigration documents,
                        named hereinafter as "personal data" or just "data") previously communicated by the data
                        subject, at the conclusion of contracts for the immigration services to be performed by the
                        Data Controller.
                    </p>
                </Section>

                {/* Purpose */}
                <Section title="Data Processing Purpose">
                    <p className="mb-4">Your data are:</p>
                    <ol className="space-y-3 list-none">
                        <NumberedItem n={1}>
                            processed <strong>without your express consent</strong> to accomplish the assigned task
                            and to comply with legal obligations (including submission of visa applications, work
                            permits, residence permits to Italian immigration authorities);
                        </NumberedItem>
                        <NumberedItem n={2}>
                            only subject to <strong>your specific and distinct consent</strong> for any other purpose;
                            in this latter case, from time to time, your consent will be requested.
                        </NumberedItem>
                    </ol>
                </Section>

                {/* Data processing */}
                <Section title="Data Processing">
                    <p>
                        The processing of your personal data is performed in compliance with the provisions of art. 4
                        of the Privacy Code and art. 4 no. 2) GDPR. The Data Controller will process all the
                        personal data only for the time necessary to fulfill the aforementioned purposes.
                    </p>
                </Section>

                {/* Data access */}
                <Section title="Data Access">
                    <p className="mb-4">Your data may be made accessible:</p>
                    <ul className="space-y-2">
                        <BulletItem>
                            to the Data Controller's employees and collaborators, as Data Processors in charge
                            and/or acting on the Data Controller's behalf, and/or system administrators;
                        </BulletItem>
                        <BulletItem>
                            to Italian immigration authorities (Ministry of Interior, Ministry of Foreign Affairs,
                            Questure, Italian Consulates);
                        </BulletItem>
                        <BulletItem>to third-party companies or other entities indicated by you;</BulletItem>
                        <BulletItem>
                            to third-party companies that provide services to the Data Controller (including
                            accountant, labour consultant).
                        </BulletItem>
                    </ul>
                </Section>

                {/* Communication */}
                <Section title="Data Communication">
                    <p>
                        The Data Controller may communicate your data for the purposes referred to in the Data
                        Processing Purpose section. Your information will not be disseminated.
                    </p>
                </Section>

                {/* Transfer */}
                <Section title="Data Transfer">
                    <p>
                        Personal data is stored on servers located in Italy, hosted at aruba.it. Some data may be
                        transferred outside the European Economic Area when submitting applications to foreign
                        authorities or service providers, with appropriate safeguards in place.
                    </p>
                </Section>

                {/* Rights */}
                <Section title="Data Subject's Rights">
                    <p className="mb-3">
                        As data subject, the client has the rights outlined in art. 7 of the Privacy Code and art.
                        15 of GDPR.
                    </p>
                    <p>
                        Where applicable, the client also has the rights referred to in Articles 16–21 of GDPR
                        (Right of rectification, right to erasure, right to restriction of processing, right to
                        data portability, right to object), as well as the right to lodge a complaint to the
                        Italian Data Protection Authority (Garante per la protezione dei dati personali).
                    </p>
                </Section>

                {/* Exercise rights */}
                <Section title="Exercise of Data Subject's Rights">
                    <p className="mb-4">
                        You may at any time obtain additional information on the processing of your data and exercise
                        your rights by sending:
                    </p>
                    <ul className="space-y-3">
                        <BulletItem>
                            a registered letter to <strong>MP Immigration Srl – Via Pattari, 6, 20122 Milano MI</strong>
                        </BulletItem>
                        <BulletItem>
                            an email to{' '}
                            <a href="mailto:info@mpimmigration.com" className="text-brand-deep underline hover:opacity-80">
                                info@mpimmigration.com
                            </a>
                        </BulletItem>
                    </ul>
                </Section>

                {/* Data Controller contact */}
                <div className="border-t border-brand-deep/20 pt-8">
                    <h2 className="text-lg font-bold text-brand-deep mb-4">The Data Controller</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-brand-deep/10 p-6 space-y-2 text-sm text-brand-text/80">
                        <p className="font-semibold text-brand-text">MP Immigration Srl</p>
                        <p>Via Pattari, 6 – 20122 Milano (MI)</p>
                        <p>
                            Email:{' '}
                            <a href="mailto:info@mpimmigration.com" className="text-brand-deep underline">
                                info@mpimmigration.com
                            </a>
                        </p>
                        <p>Partita IVA / VAT: 07497690961 (IT07497690961)</p>
                        <p>PEC: mpimmigration@legalmail.it</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* ─── Helpers ─────────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-xl font-bold text-brand-deep mb-4 pb-2 border-b border-brand-deep/20">
                {title}
            </h2>
            <div className="text-brand-text/85 leading-relaxed space-y-3">{children}</div>
        </section>
    );
}

function BulletItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-2.5 text-brand-text/85 leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-deep flex-shrink-0" />
            <span>{children}</span>
        </li>
    );
}

function NumberedItem({ n, children }: { n: number; children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-3 text-brand-text/85 leading-relaxed">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-deep text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {n}
            </span>
            <span>{children}</span>
        </li>
    );
}
