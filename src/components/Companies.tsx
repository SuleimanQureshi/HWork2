export default function Companies() {
  const companies = [
    {
      name: 'EURA (Full member)',
      id: 'EURA (Full member)',
      logo: '46.png'
    },
    {
      name: 'Relocate the Profit',
      id: 'Relocate the Profit',
      logo: 'RelocateTheProfit.png'
    },
    {
      name: 'Airelo',
      id: 'Airelo',
      logo: 'AIR.jpeg'
    },
    {
      name: 'Worldwide ERC',
      id: 'Worldwide ERC',
      logo: '44.png'
    },
    {
      name: 'Peregrine',
      id: 'Peregrine',
      logo: '47.png'
    },
    {
      name: 'IBA',
      id: 'IBA',
      logo: '45.png'
    },
  ];

  const scrollData = [...companies, ...companies];

  return (
    <section className="bg-brand-cream py-12 md:py-20 overflow-hidden">
      {/* 1. THIS IS YOUR CSS INJECTED DIRECTLY */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 2. THE VIEWPORT (The "Window" that hides the overflow) */}
        <div className="relative flex overflow-hidden">
          
          {/* 3. THE MOVING TRACK */}
          <div className="animate-marquee flex items-center gap-12">
            {scrollData.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex items-center justify-center h-24 md:h-32 w-40 md:w-52 flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}