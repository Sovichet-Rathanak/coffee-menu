"use client"
import { Battambang } from 'next/font/google';
import AnimatedContent from './AnimatedContent';

const battambang = Battambang({
    weight: ['400', '700'],
    subsets: ['khmer']
});


export default function CafeMenuCard() {
    return (
        <AnimatedContent
            distance={90}
            direction="vertical"
            reverse={false}
            initialOpacity={0.05}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
        >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden border-2 border-gray-200 h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0" style={{ aspectRatio: '363/525' }}>
                    <img
                        src="/thumbnails/coffee/mocha.png"
                        alt="Mocha"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-2.5 sm:p-4 md:p-6 bg-gradient-to-b from-white via-gray-50/30 to-gray-50 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
                        <div className="flex-1 min-w-0">
                            <h2 className={`${battambang.className} text-lg sm:text-xl md:text-2xl font-bold text-black leading-snug mb-0.5 sm:mb-1`}
                            >
                                ម៉ូកា
                            </h2>

                            <p className="text-[10px] sm:text-sm md:text-base text-gray-500 font-medium">
                                Mocha
                            </p>
                        </div>

                        <div className="text-right sm:text-right flex-shrink-0 mt-1 sm:mt-0">
                            <p className="text-base sm:text-2xl md:text-3xl font-bold text-black">
                                $1.50
                            </p>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="hidden sm:block mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                            <span className="font-medium">Espresso based</span>
                            <span className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Available
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedContent>
    );
}