import { Check, ArrowRight, Phone, BookOpen, Map } from 'lucide-react';
import RotatingCircle from './RotatingCircle';

export default function WhyChooseSection() {
  return (
     <div className="min-h-screen bg-brand-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image with gold border */}
            <div className="relative bg-gray-300 rounded-3xl h-80 w-full border-4 border-brand-primary">
</div>

            {/* Circular Immigration Badge */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <RotatingCircle />
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Yellow experience box */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-400 rounded-3xl p-8 text-white">
              <div className="text-6xl font-bold">25</div>
              <div className="text-xl mt-1">Years Of</div>
              <div className="text-xl">experience</div>
            </div>

            {/* Gray placeholder */}
            <div className="bg-gray-300 rounded-3xl h-96 w-full"></div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Map className="w-5 h-5 text-brand-deep" />
                <span className="uppercase tracking-wide font-medium">WHY CHOOSE US</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Where Wanderlust Meets{' '}
                <span className="text-brand-deep">Dream Destinations</span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla
              </p>
            </div>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Passport Plus */}
              <div className="border-2 border-gray-200 rounded-3xl p-6 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-deep">Passport Plus</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Beyond Border Immigration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Worldwide Visa Assistance</span>
                  </div>
                </div>
              </div>

              {/* Global Entry */}
              <div className="border-2 border-gray-200 rounded-3xl p-6 space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-deep">Global Entry</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">GlobeTrot Visa Services</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">Infinity Visa Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center gap-6 flex-wrap">
              <button className="border-2 border-brand-primary text-brand-deep font-semibold px-8 py-3 rounded-full hover:bg-brand-cream transition-colors flex items-center gap-2">
                Read More
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Need help?</div>
                  <div className="font-bold text-gray-900">(000) 000-0000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}