import { Plane } from 'lucide-react';

export default function RotatingCircle() {
  return (
    <div className="relative w-56 h-56">
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text className="text-[11px] font-medium fill-red-900 tracking-[0.3em]" xmlSpace="preserve">
            <textPath href="#circlePath" startOffset="0%">
              MP Immigration •                  MP Immigration •   
            </textPath>
          </text>
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-white rounded-full border-4 border-red-900 flex items-center justify-center">
          <Plane className="w-12 h-12 text-red-900" />
        </div>
      </div>
    </div>
  );
}
