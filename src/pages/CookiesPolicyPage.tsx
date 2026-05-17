export default function CookiesPolicyPage() {
    return (
        <main className="min-h-screen bg-brand-cream">
            {/* Hero banner */}
            <div className="bg-brand-deep text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
                        Legal
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold">Cookies Policy</h1>
                    <p className="mt-4 text-white/70 text-sm">Last updated: January 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-14 space-y-10 text-brand-text">

                {/* Use of cookies */}
                <Section title="Use of Cookies">
                    <p>
                        In order to improve your browsing experience,{' '}
                        <a href="https://www.mpimmigration.com" className="text-brand-deep underline hover:opacity-80">
                            www.mpimmigration.com
                        </a>{' '}
                        makes use of cookies. When you visit our site, a small amount of information will be stored
                        on your device, using small text files called "cookies".
                    </p>
                </Section>

                {/* Session & tracking */}
                <Section title="Session Cookies and Tracking Cookies">
                    <p className="mb-4">
                        Cookies may either expire at the end of a browsing session (the time that elapses between
                        opening and closing of the browser window) or be stored for a longer period of time.
                    </p>
                    <ul className="space-y-3">
                        <BulletItem>
                            <strong>Session cookies</strong> allow websites to link user actions during a browser session.
                            Session cookies expire when the browser session ends and are therefore not stored.
                        </BulletItem>
                        <BulletItem>
                            <strong>Tracking cookies</strong> are stored on a user's device between browser sessions
                            and remember user preferences or actions within a longer timeframe.
                        </BulletItem>
                    </ul>
                </Section>

                {/* First party / third party */}
                <Section title='"First Party" and "Third Party" Cookies'>
                    <p className="mb-4">
                        A cookie is classified as "First party" or "Third party" depending on its website or domain of origin.
                    </p>
                    <ul className="space-y-3">
                        <BulletItem>
                            <strong>"First-party" cookies</strong> are sent by the website being used.
                        </BulletItem>
                        <BulletItem>
                            <strong>"Third-party" cookies</strong> are sent by external partner websites, which may
                            provide several services or functions on the website (such as LinkedIn).
                        </BulletItem>
                    </ul>
                </Section>

                {/* Cookie details */}
                <Section title="Cookie Details for This Website">
                    <p className="mb-6 italic text-brand-text/70">
                        We do not use cookies for profiling and marketing purposes.
                    </p>

                    <SubSection title="Technical Cookies">
                        <p className="mb-3">
                            These types of cookies are necessary for the proper functioning of certain areas of the
                            website. Cookies in this category include both session cookies and tracking cookies. If
                            cookies of this type are disabled, the site or parts of it may not function correctly.
                            Cookies in this category are always sent by our domain.
                        </p>
                        <ul className="space-y-2">
                            <BulletItem>Internal session cookies: necessary for correct website functioning</BulletItem>
                        </ul>
                    </SubSection>

                    <SubSection title="Analytical Cookies">
                        <p className="mb-3">
                            Cookies of this type are not indispensable, and are used to gather information about how
                            users navigate the site. We use this information for statistical analysis in order to
                            improve the site and monitor its correct functioning. This type of cookie collects
                            information anonymously about user activity on the site, traffic origin and behaviour.
                            Cookies in this category may be sent from our website or from third-party partner websites.
                        </p>
                        <ul className="space-y-2">
                            <BulletItem>Google Analytics cookies (anonymized): monitoring and statistics cookies</BulletItem>
                        </ul>
                    </SubSection>

                    <SubSection title="Third-Party Cookies">
                        <p className="mb-3">
                            These cookies are used to integrate third-party functionality on the site (such as comment
                            forms, social network icons, live chat widgets, etc.). Cookies of this type are sent by
                            partner websites providing services or functions on our website.
                        </p>
                        <ul className="space-y-2">
                            <BulletItem>
                                For further information about Google cookies, please visit:{' '}
                                <a
                                    href="https://www.google.com/intl/en/policies/technologies/types/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-deep underline hover:opacity-80 break-all"
                                >
                                    google.com/intl/en/policies/technologies/types/
                                </a>
                            </BulletItem>
                            <BulletItem>
                                Aruba.it:{' '}
                                <a
                                    href="https://www.aruba.it/en/cookie-policy.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-deep underline hover:opacity-80"
                                >
                                    aruba.it/en/cookie-policy.aspx
                                </a>
                            </BulletItem>
                        </ul>
                    </SubSection>
                </Section>

                {/* Manage cookies */}
                <Section title="Manage Cookies">
                    <p className="mb-4">
                        Cookie settings can be changed under "Settings" in your browser menu. Select your browser
                        type below for further information on how to change cookie settings:
                    </p>
                    <ul className="space-y-2">
                        {['Chrome', 'Firefox', 'Safari', 'Microsoft Edge', 'Opera'].map((browser) => (
                            <li key={browser} className="flex items-center gap-2 text-brand-deep font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-deep flex-shrink-0" />
                                {browser}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm text-brand-text/70">
                        Disabling cookies may prevent users from accessing certain areas or functions on the website.
                    </p>
                </Section>

                {/* Contact */}
                <div className="border-t border-brand-deep/20 pt-8">
                    <h2 className="text-lg font-bold text-brand-deep mb-4">Contact</h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-brand-deep/10 p-6 space-y-2 text-sm text-brand-text/80">
                        <p className="font-semibold text-brand-text">MP Immigration Srl</p>
                        <p>
                            Email:{' '}
                            <a href="mailto:info@mpimmigration.com" className="text-brand-deep underline">
                                info@mpimmigration.com
                            </a>
                        </p>
                        <p>
                            Tel:{' '}
                            <a href="tel:+390254123890" className="text-brand-deep underline">
                                02 5412 3890
                            </a>
                        </p>
                        <p className="pt-2">Partita IVA: 07497690961 | European VAT: IT07497690961</p>
                        <p>PEC: mpimmigration@legalmail.it</p>
                        <p>
                            Sede Legale: Via Pattari, 6 – 20122 Milano (MI) | Cap. Soc. € 10.000 I.V. | REA n° 1962745
                        </p>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-6">
            <h3 className="text-base font-semibold text-brand-text mb-2">{title}</h3>
            {children}
        </div>
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
