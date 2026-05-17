export interface SubService {
    id: string;
    title: string;
    short_description: string;
    full_description: string;
    icon: string;
    image: string;
}

export interface ServiceCategory {
    slug: string;
    title: string;
    description: string;
    subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        slug: 'corporate-immigration',
        title: 'Corporate Immigration',
        description:
            'End-to-end immigration support for companies hiring international talent, ensuring fast, compliant, and stress-free workforce relocation to Italy.',
        subServices: [
            {
                id: 'work-permits',
                title: 'Work Permits',
                icon: 'Briefcase',
                image: '/Pictures for MP/workpermits.jpg',
                short_description:
                    'Navigate the complexities of corporate immigration with our expert guidance. We assist companies and individuals in obtaining work permits, ensuring compliance with all legal requirements.',
                full_description:
                    "Empowering businesses to bring the world's best talent to Italy. In today's global economy, your competitive advantage depends on accessing skilled professionals wherever they are. We partner with multinational corporations and growing businesses to navigate Italy's complex work permit landscape with precision and efficiency. From EU Blue Cards for highly qualified workers to intra-company transfers and specialised assignments, our team handles every aspect of the immigration process — initial assessments, documentation preparation, government submissions, and permit collection. We ensure full compliance with Italian immigration law while minimising delays and administrative burdens, so your employees can start contributing to your Italian operations without unnecessary obstacles standing in their way.",
            },
        ],
    },
    {
        slug: 'visa-citizenship',
        title: 'Visa and Citizenship Assistance',
        description:
            'Comprehensive guidance for individuals seeking Italian visas or citizenship, managing every legal and administrative step with clarity and precision.',
        subServices: [
            {
                id: 'elective-residence-visas',
                title: 'Elective Residence Visas',
                icon: 'Home',
                image: '/Pictures for MP/electiveresidency.jpg',
                short_description:
                    'Enjoy the freedom to live in your chosen destination with an elective residence visa. Perfect for retirees and individuals with independent means.',
                full_description:
                    "Live the Italian dream on your own terms. The Elective Residence Visa offers a unique opportunity to establish your life in Italy without employment obligations, provided you can demonstrate sufficient independent income. We assist you in proving financial stability, preparing comprehensive documentation for yourself and eligible family members—including spouses, minor children, and dependent adult children or parents—and navigating the application process from start to finish. Within eight days of your arrival, we coordinate your residence permit application and manage all administrative requirements at local offices. Our hands-on approach transforms what could be an overwhelming bureaucratic process into a straightforward pathway to your new Italian lifestyle, allowing you to enjoy la dolce vita while we handle the paperwork.",
            },
            {
                id: 'investor-entrepreneur-visas',
                title: 'Investor and Entrepreneur Visas',
                icon: 'TrendingUp',
                image: '/Pictures for MP/investorvisa.jpg',
                short_description:
                    'Launch or expand your business internationally with our investor and entrepreneur visa services. We provide expert guidance on investment requirements, business plans, and application procedures.',
                full_description:
                    "Build your business dreams on Italian soil. Italy's dynamic economy and strategic European location make it an attractive destination for international investors and entrepreneurs establishing new ventures. We provide comprehensive legal and operational support for businesspeople and companies launching subsidiaries, startups, or commercial operations in Italy. Our multidisciplinary team structures the appropriate business entity from both legal and tax perspectives, prepares investor and entrepreneur visa applications, and navigates Italian commercial regulations with precision. From initial company formation to obtaining the proper work permits, we handle every detail of your business immigration journey—ensuring regulatory compliance while you focus on building and growing your enterprise. Your vision deserves expert execution, and we deliver both.",
            },
            {
                id: 'family-reunification-visas',
                title: 'Family Reunification Visas',
                icon: 'Users',
                image: '/Pictures for MP/familyreunification.jpg',
                short_description:
                    'Reunite with your loved ones through our family reunification visa services. We handle the complexities of family immigration law to bring families together across borders.',
                full_description:
                    "Bring your loved ones home to Italy. Living apart from family is one of life's greatest challenges. The Family Reunification Visa allows foreign residents in Italy to reunite with their closest family members—spouses, minor children, dependent adult children, and dependent parents—creating the foundation for a complete life in your new home. We manage the entire reunification process, from preparing required documentation and providing adequate housing and income to filing applications with Italian authorities and obtaining residence permits for all qualifying family members. Our team understands both the legal requirements and the emotional importance of reuniting families, providing compassionate, efficient service that brings your loved ones to Italy as quickly as regulations allow. Together in Italy, your family's next chapter begins.",
            },
            {
                id: 'digital-nomad-visas',
                title: 'Digital Nomad Visas',
                icon: 'Laptop',
                image: '/Pictures for MP/digitalnomad.jpg',
                short_description:
                    'Work remotely from anywhere in the world with our digital nomad visa assistance. We help remote workers and freelancers obtain the necessary permits to live and work in their dream destinations.',
                full_description:
                    "Work remotely, live extraordinarily. Italy's Digital Nomad Visa represents a new frontier for location-independent professionals who refuse to choose between career success and quality of life. This innovative visa category enables remote workers and freelancers to reside in Italy while maintaining employment or client relationships with foreign companies. We help you demonstrate sufficient income, secure appropriate accommodation, and navigate the specific requirements of this emerging visa pathway. Our team prepares your documentation with precision, manages the submission process, and assists with obtaining your residence permit—allowing you to combine professional productivity with the unmatched cultural richness, culinary excellence, and natural beauty of Italian living. Your remote career deserves an inspiring backdrop, and Italy delivers.",
            },
            {
                id: 'italian-citizenship',
                title: 'Italian Citizenship',
                icon: 'Flag',
                image: '/Pictures for MP/italiancitizenship.jpg',
                short_description:
                    'Claim your Italian heritage with our comprehensive citizenship services. Whether through descent, marriage, or residency, we guide you through every step of obtaining Italian citizenship.',
                full_description:
                    "Claim your rightful place in the Italian community. Italian citizenship isn't just a passport—it's a connection to heritage, access to opportunities throughout the European Union, and a legacy you can pass to future generations. Whether you're eligible through descent, marriage, residency, or naturalisation, the path to citizenship demands meticulous preparation and expert legal guidance. Our attorneys and citizenship specialists provide comprehensive support from your very first consultation through the moment you receive your citizenship grant. We analyse your unique eligibility pathway, gather and authenticate every required document, prepare flawless applications, and manage all interactions with Italian authorities with precision and persistence. Citizenship applications can take months or even years, but with our expertise in minimising bureaucratic obstacles and maximising approval chances, you move steadily toward your goal. Your Italian identity awaits—let us guide you home.",
            },
            {
                id: 'study-permits',
                title: 'Study Permits',
                icon: 'GraduationCap',
                image: '/Pictures for MP/studyvisa.jpg',
                short_description:
                    'Pursue your educational dreams abroad with our comprehensive study permit assistance. We guide students through the application process, ensuring all documentation is complete and submitted on time.',
                full_description:
                    "Turn your academic aspirations into an Italian reality. Italy's world-renowned universities and prestigious academic institutions have shaped generations of scholars, artists, and innovators. We guide international students through every step of the study permit process—from securing university enrollment and preparing visa applications to registering with local authorities upon arrival. Our team ensures all documentation meets Italian requirements, handles communication with consulates and immigration offices, and provides the practical support you need to transition smoothly into Italian academic life. With our expertise, you can focus on your studies while we handle the complexities of immigration compliance, ensuring you're fully prepared to begin your educational journey in Italy with confidence.",
            }
        ],
    },
    {
        slug: 'document-procurement',
        title: 'Document Procurement & Ancestry Research',
        description:
            'Efficient retrieval of official Italian records and genealogical documents for legal, citizenship, or heritage purposes.',
        subServices: [
            {
                id: 'italian-document-retrieval',
                title: 'Italian Document Retrieval',
                icon: 'FileText',
                image: '/Pictures for MP/documentretrival.jpg',
                short_description:
                    'Access vital Italian documents with our specialized retrieval services. We navigate Italian bureaucracy to obtain birth certificates, marriage records, and other essential documents.',
                full_description:
                    "Every official document you need, delivered without the bureaucratic maze. Navigating Italy's complex administrative system to obtain vital certificates and official records can consume weeks of your time—endless inquiries, language barriers, and confusing procedures that lead nowhere. We eliminate that frustration. Our document procurement service handles everything from criminal background checks and police records to birth, marriage, and death certificates, university degrees, corporate appointment reports, and beyond. We know exactly which offices to contact, which forms to complete, and how to expedite processing times within the bounds of Italian regulations. You simply tell us what you need, and we deliver authenticated, legally valid documents directly to you—no stress, no delays, no bureaucratic headaches. Your time is valuable, and we protect it by handling the complexity on your behalf.",
            },
            {
                id: 'citizenship-eligibility-assessment',
                title: 'Italian Citizenship Eligibility Assessment',
                icon: 'Search',
                image: '/Pictures for MP/cirizenshipassesemnt.jpg',
                short_description:
                    'Discover your eligibility for Italian citizenship with our comprehensive assessment service. We analyze your family history and circumstances to determine the best path to citizenship.',
                full_description:
                    'Discover your eligibility for Italian citizenship with our comprehensive assessment service. We analyze your family history and circumstances to determine the best path to citizenship. Our experts review your lineage, residency history, and personal circumstances to identify the most viable route—whether through descent, marriage, or naturalisation. We provide a clear, actionable report outlining your options, required documentation, and estimated timelines, giving you the confidence to move forward with your citizenship journey.',
            },
            {
                id: 'genealogical-research',
                title: 'Genealogical Research',
                icon: 'BookOpen',
                image: '/Pictures for MP/Genealogical Research.jpg',
                short_description:
                    "Uncover your family's Italian roots with our professional genealogical research services. We trace your ancestry and compile the documentation needed for citizenship applications.",
                full_description:
                    "Uncover your Italian roots with expert precision. Your family's Italian story is written in archives across municipalities, parishes, and state repositories throughout Italy—birth records, baptismal certificates, marriage documents, death registrations, military files, census data, and notarial records that reveal where you came from and who came before. Finding these documents yourself means navigating Italian bureaucracy, overcoming language barriers, and spending countless hours searching archives that may or may not hold what you need. We eliminate every obstacle. Our genealogical research team specialises in retrieving historical records from local municipalities, parish archives, and state collections across all Italian regions. We identify the correct archives, submit proper requests, track progress relentlessly, and ensure every document we deliver is authentic, complete, and legally valid. Whether you're building your family tree, exploring ancestral connections, or gathering documentation for dual citizenship applications, we provide fast, accurate, and reliable results with absolute care for your family's legacy. Discover your heritage without leaving home—we bring Italy's archives to you.",
            },
        ],
    },
    {
        slug: 'real-estate',
        title: 'Real Estate Services',
        description:
            'Full-service support for buying, leasing, or investing in Italian property, simplifying legal, regulatory, and transaction processes for local and international clients.',
        subServices: [
            {
                id: 'property-search-selection',
                title: 'Property Search and Selection',
                icon: 'MapPin',
                image: '/Pictures for MP/propertysearch.jpg',
                short_description:
                    'Find your perfect property with our expert real estate search and selection services. We identify properties that match your criteria and budget, making your relocation seamless.',
                full_description:
                    "Finding the right property in Italy's diverse market requires local expertise and an understanding of your unique needs. We leverage our extensive network and market knowledge to identify properties that match your criteria—whether residential, commercial, or investment-focused. From initial search through property viewings and market analysis, we guide you to opportunities that align perfectly with your vision and budget.",
            },
            {
                id: 'lease-purchase-support',
                title: 'Lease and Purchase Support',
                icon: 'Key',
                image: '/Pictures for MP/leaseandpurchase.jpg',
                short_description:
                    'Navigate the complexities of international real estate transactions with our comprehensive lease and purchase support. We guide you through negotiations, paperwork, and closing procedures.',
                full_description:
                    'Securing property in Italy involves complex negotiations, due diligence, and regulatory compliance that can overwhelm even experienced buyers. Our team manages the entire transaction process—from price negotiations and preliminary agreements to notary coordination and final deed registration. We protect your interests at every stage, ensuring transparent terms, proper documentation, and seamless completion of your lease or purchase.',
            },
            {
                id: 'contract-review',
                title: 'Contract Review',
                icon: 'FileCheck',
                image: '/Pictures for MP/contract review.jpg',
                short_description:
                    'Protect your interests with our professional contract review services. We examine lease and purchase agreements to ensure your rights are protected and terms are favorable.',
                full_description:
                    "Italian property contracts contain crucial legal provisions, obligations, and potential risks that demand expert scrutiny before you sign. Our attorneys conduct thorough reviews of purchase agreements, lease contracts, and related documentation, identifying problematic clauses and ensuring your rights are fully protected. We explain every term in clear language, negotiate favourable modifications when needed, and confirm that all contractual elements comply with Italian law and serve your best interests.",
            },
        ],
    },
    {
        slug: 'other-services',
        title: 'Other Services',
        description:
            'Essential support solutions including document translation, legalisation, and company formation to ensure smooth personal and business operations in Italy.',
        subServices: [
            {
                id: 'translation-legalisation',
                title: 'Translation and Legalisation',
                icon: 'Globe',
                image: '/Pictures for MP/translationandlegalization.jpg',
                short_description:
                    'Ensure your documents meet international standards with our translation and legalisation services. We provide certified translations and handle apostille and authentication requirements.',
                full_description:
                    "Making your documents legally valid across borders, seamlessly. International transactions, immigration applications, and cross-border legal matters all hinge on one critical requirement—properly authenticated and translated documentation that authorities will accept without question. The legalisation process varies dramatically depending on destination and document type: some require consular authentication, others need apostille certification, and many demand notary validation alongside sworn translations. We navigate this complexity on your behalf. Our team coordinates with professional translators to produce officially certified translations that meet international legal standards, then manages the complete authentication process — whether through consular channels, apostille procedures, or notarial certification. From initial document preparation to final legalisation stamp, we ensure every certificate, contract, and official record is properly authenticated for use in Italy or abroad. Your documents move forward with confidence, and so do you.",
            },
            {
                id: 'company-setup',
                title: 'Company Setup',
                icon: 'Building2',
                image: '/Pictures for MP/companysetup.jpg',
                short_description:
                    'Establish your business presence internationally with our company setup services. We handle registration, compliance, and all legal requirements to get your business up and running.',
                full_description:
                    "Launch your Italian business with the right foundation from day one. Establishing a commercial presence in Italy isn't simply about registering a company—it's about structuring your entity to optimise tax efficiency, ensure regulatory compliance, and position your venture for sustainable growth. Our corporate services team provides comprehensive support for subsidiaries, branch offices, and startup formations, combining legal expertise with strategic tax planning to create optimal business structures. We handle entity registration with Italian authorities, establish robust compliance frameworks, draft commercial contracts that protect your interests, and manage all regulatory filings required under Italian and EU law. Working in close collaboration with our attorneys and chartered accountants, we deliver integrated solutions addressing corporate governance, fiscal optimisation, and operational requirements simultaneously. The result: an Italian business entity that's legally sound, tax-efficient, fully compliant, and strategically positioned to compete and thrive in the Italian market and beyond.",
            },
        ],
    },
];
