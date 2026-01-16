import React from 'react';
import { GuestMessage } from '../types';

interface GuestbookProps {
  messages: GuestMessage[];
}

const Guestbook: React.FC<GuestbookProps> = ({ messages }) => {
  return (
    <div id="guestbook-section" className="w-full max-w-6xl mx-auto px-4 py-20 relative">
       {/* Section Title */}
       <div className="text-center mb-16 space-y-4">
        <h3 className="text-3xl md:text-4xl font-serif text-warm-900 font-bold">
          사랑을 담아 전하는 말
        </h3>
        <p className="text-warm-900/60 font-sans">
          가족들과 지인들의 따뜻한 마음이 모였습니다.
        </p>
      </div>

      {/* 
        Changed from Grid to Columns (Masonry layout). 
        'columns-1 md:columns-2 lg:columns-3' creates the waterfall effect.
        'gap-6' creates horizontal space between columns.
      */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 md:space-y-0">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            /* 'break-inside-avoid' prevents the card from being split across columns. 'mb-6' adds vertical spacing. */
            className={`break-inside-avoid mb-6 inline-block w-full group p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-warm-200 ${msg.color} animate-fade-in-up`}
          >
            {/* Quote Icon */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-gold-DEFAULT/20 text-4xl font-serif">"</div>
              <div className="text-xs text-warm-900/30 font-sans mt-1">{msg.date}</div>
            </div>
            
            <p className="text-warm-900/80 text-lg leading-relaxed font-serif mb-6 break-keep whitespace-pre-wrap">
              {msg.text}
            </p>
            
            <div className="flex items-center justify-end border-t border-warm-900/10 pt-4">
              <span className="text-sm font-sans font-bold text-warm-900/60 uppercase tracking-wider">
                From. {msg.from}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;