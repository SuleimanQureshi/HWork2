import { useState } from "react";

const BORDER_W = 4;
const CORNER_R = 22;
const BRACKET_SIZE = "52%";

const cards = [
    {
        title: "Our Expertise",
        accent: "#218380",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M30 22l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        text: "We are highly specialised professionals, committed to understanding each client's needs. From corporate mobility to private immigration matters, we provide strategic guidance built around individuals, families, and organizations.",
    },
    {
        title: "Our Vision",
        accent: "#4AABAF",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.2" />
                <line x1="24" y1="4" x2="24" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="24" y1="37" x2="24" y2="44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="4" y1="24" x2="11" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="37" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
        text: "Our goal is to help companies and people achieve their global ambitions with tailored immigration and relocation services. We deliver seamless, efficient, compliant, and personalized solutions with the highest professional standards.",
    },
    {
        title: "Our Network",
        accent: "#ED1D69",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                <circle cx="24" cy="10" r="5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="8" cy="37" r="5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="40" cy="37" r="5" stroke="currentColor" strokeWidth="2.2" />
                <line x1="20.5" y1="14" x2="10.5" y2="33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="27.5" y1="14" x2="37.5" y2="33" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="13" y1="37" x2="35" y2="37" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
        text: "We rely on a unique and well-established partner network including legal, tax, and real estate professionals, allowing us to offer fully integrated and multidisciplinary support.",
    },
    {
        title: "Our Excellence",
        accent: "#FFDA85",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                <polygon
                    points="24,5 29.5,18 44,18 33,27.5 37,42 24,33 11,42 15,27.5 4,18 18.5,18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
        ),
        text: "With more than 20 years of experience, 500+ companies assisted and more than 10,000 individuals supported, we ensure our clients benefit from the highest level of service, accuracy, and up-to-date knowledge.",
    },
    {
        title: "Our Values",
        accent: "#BE2560",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
                <path
                    d="M24 42C24 42 6 30 6 18a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 12-18 24-18 24z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                />
                <path d="M16 22l5 5 11-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        text: "Ethics, transparency, and accountability guide our work with integrity and compliance. We build trust through clear communication and consistent results. Teamwork ensures coordinated and effective support. Flexibility allows us to adapt. We promote sustainability through responsible, long-term practices.",
    },
];

function Card({ card, index }: { card: (typeof cards)[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const iconColor = card.accent === "#FFDA85" ? "#c8a000" : card.accent;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: CORNER_R,
                padding: "30px 20px 26px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: hovered
                    ? "0 14px 38px rgba(0,0,0,0.13)"
                    : "0 2px 18px rgba(0,0,0,0.07)",
                transform: hovered ? "translateY(-6px)" : "translateY(0)",
                transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                cursor: "default",
            }}
        >
            {/* TOP-LEFT corner bracket */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: BRACKET_SIZE,
                    height: BRACKET_SIZE,
                    borderTop: `${BORDER_W}px solid ${card.accent}`,
                    borderLeft: `${BORDER_W}px solid ${card.accent}`,
                    borderTopLeftRadius: CORNER_R,
                    pointerEvents: "none",
                }}
            />

            {/* BOTTOM-RIGHT corner bracket */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: BRACKET_SIZE,
                    height: BRACKET_SIZE,
                    borderBottom: `${BORDER_W}px solid ${card.accent}`,
                    borderRight: `${BORDER_W}px solid ${card.accent}`,
                    borderBottomRightRadius: CORNER_R,
                    pointerEvents: "none",
                }}
            />

            {/* Icon */}
            <div
                style={{
                    color: iconColor,
                    marginBottom: 14,
                    marginTop: 4,
                    transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: hovered ? "scale(1.12)" : "scale(1)",
                }}
            >
                {card.icon}
            </div>

            {/* Title */}
            <div
                style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1c1c2e",
                    textAlign: "center",
                    letterSpacing: "0.01em",
                    lineHeight: 1.2,
                    marginBottom: 20,
                }}
            >
                {card.title}
            </div>

            {/* Divider */}
            <div
                style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#ececec",
                    marginBottom: 14,
                }}
            />

            {/* Body text */}
            <p
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#6b6b82",
                    lineHeight: 1.6,
                    textAlign: "left",
                    margin: 0,
                }}
            >
                {card.text}
            </p>
        </div>
    );
}

export default function ExpertiseCards() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .expertise-root {
          background: #FDF6F0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
        }
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          max-width: 100%;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .expertise-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .expertise-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

            <div className="expertise-root">
                <div className="expertise-grid">
                    {cards.map((card, i) => (
                        <Card key={i} card={card} index={i} />
                    ))}
                </div>
            </div>
        </>
    );
}
