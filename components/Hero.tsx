import React from 'react';
import PhotoCollage from './PhotoCollage';
import Guestbook from './Guestbook';
import { GuestMessage } from '../types';

interface HeroProps {
  onStart: () => void;
  messages: GuestMessage[];
}

const Hero: React.FC<HeroProps> = ({ onStart, messages }) => {
  return (
    <div className="w-full">
      {/* Section 1: Title / Intro (Full Screen) */}
      <div className="flex flex-col items-center justify-center min-h-[95vh] relative px-4 pb-20">
        
        {/* Decorative Frame */}
        <div className="absolute inset-4 md:inset-10 border border-gold/30 rounded-[2rem] pointer-events-none z-0"></div>
        <div className="absolute inset-6 md:inset-12 border border-gold/20 rounded-[1.5rem] pointer-events-none z-0"></div>

        <div className="text-center space-y-8 max-w-2xl relative z-10 animate-fade-in-up mt-10 md:mt-0">
          
          {/* Emblem */}
          <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold/50 bg-white/50 flex items-center justify-center mb-6 shadow-lg animate-float-slow backdrop-blur-sm">
            <span className="text-4xl md:text-5xl text-blossom-deep font-serif font-bold">壽</span>
          </div>

          <div className="space-y-6">
            <p className="text-gold-DEFAULT tracking-[0.3em] font-serif text-lg md:text-xl font-bold uppercase animate-[fadeIn_2s_ease-out]">
              Celebration of Life
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-warm-900 leading-tight">
              사랑하는 할머니<br />
              <span className="text-blossom-deep relative inline-block">
                팔순
                <span className="absolute -bottom-2 left-0 w-full h-1/3 bg-gold-light/30 -z-10 rounded-full"></span>
              </span> 생신을<br />
              축하드립니다
            </h1>
            <p className="text-warm-900/70 text-lg md:text-xl font-sans leading-relaxed pt-4">
              세상에서 가장 따뜻한 품,<br />
              그 사랑에 깊이 감사드립니다.
            </p>
          </div>

          <div className="pt-12">
            <button
              onClick={onStart}
              className="group relative px-10 py-4 bg-warm-900 text-warm-50 font-serif text-xl rounded-full shadow-xl hover:bg-gold-DEFAULT transition-all duration-500 overflow-hidden hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                축하 메시지 쓰기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-warm-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Section 2: Photo Collage */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-white/40 to-warm-100/30">
        <PhotoCollage />
      </div>

      {/* Section 3: Guestbook (Formerly Family Messages) */}
      <div className="relative z-10 bg-gradient-to-b from-warm-100/30 to-transparent">
        <Guestbook messages={messages} />
      </div>

      {/* Section 4: Bottom Call to Action */}
      <div className="py-24 text-center relative z-10">
        <p className="text-warm-900/60 font-serif mb-6 text-lg">마음을 담은 편지를 전해보세요</p>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-blossom-deep text-white font-serif rounded-full shadow-md hover:bg-blossom-pink transition-colors"
        >
          축하 메시지 작성하기
        </button>
      </div>
    </div>
  );
};

export default Hero;