import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface HoldToTravelButtonProps {
  mousePosition: { x: number; y: number };
  progress: number;
  isHolding: boolean;
  nextDestination: string;
}

export function HoldToTravelButton({
  mousePosition,
  progress,
  isHolding,
  nextDestination
}: HoldToTravelButtonProps) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        x: '-50%',
        y: '-50%'
      }}
      initial={false}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={283}
            strokeDashoffset={283 - (283 * progress) / 100}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
            }}
          />
        </svg>

        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            animate={{
              rotate: isHolding ? [0, 10, -10, 0] : 0
            }}
            transition={{
              duration: 0.4,
              repeat: isHolding ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <Plane className="w-6 h-6 text-white drop-shadow-lg" />
          </motion.div>
        </div>

        <div className="absolute inset-0 rounded-full bg-black/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-full top-1/2 -translate-y-1/2 ml-6 text-white whitespace-nowrap"
      >
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide drop-shadow-lg">
            {isHolding ? `Hold to Continue` : 'Hold to Continue'}
          </span>
          {isHolding && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-0.5 bg-white mt-1 rounded-full"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
