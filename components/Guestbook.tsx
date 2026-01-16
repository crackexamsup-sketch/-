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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`group p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-warm-200 ${msg.color} animate-fade-in-up`}
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