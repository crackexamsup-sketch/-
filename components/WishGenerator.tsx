import React, { useState } from 'react';

interface WishGeneratorProps {
  onReset: () => void;
  onSave: (text: string, from: string) => void;
}

const WishGenerator: React.FC<WishGeneratorProps> = ({ onReset, onSave }) => {
  const [content, setContent] = useState('');
  const [from, setFrom] = useState('');

  const handleSave = () => {
    if (!content.trim()) {
      alert('편지 내용을 적어주세요.');
      return;
    }
    if (!from.trim()) {
      alert('보내는 분의 성함을 적어주세요.');
      return;
    }
    onSave(content, from);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 animate-fade-in-up">
      <div className="elegant-card rounded-xl p-8 md:p-12 relative overflow-hidden bg-[#fdfbf7]">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-200 via-gold-light to-red-200 opacity-50"></div>
        
        <h2 className="text-3xl font-serif text-center mb-10 text-warm-900">
          <span className="text-blossom-deep">마음</span>을 담은 편지
        </h2>

        {/* Paper Area */}
        <div className="relative mb-10">
          <div className="relative w-full">
            {/* Lined Paper Styling */}
            <textarea
              className="w-full min-h-[320px] bg-transparent text-xl md:text-2xl leading-[2.5rem] font-serif text-warm-900 placeholder:text-warm-300 outline-none resize-none border-none focus:ring-0 p-0"
              style={{
                backgroundImage: 'linear-gradient(transparent, transparent calc(2.5rem - 1px), #EBE0C7 calc(2.5rem - 1px))',
                backgroundSize: '100% 2.5rem',
                lineHeight: '2.5rem',
                backgroundAttachment: 'local'
              }}
              placeholder="사랑하는 할머니께..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              spellCheck={false}
            />
          </div>
        </div>

        {/* Sender Input */}
        <div className="flex justify-end items-end gap-3 mb-12">
          <span className="font-serif text-warm-900/60 pb-2 text-lg">From.</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-warm-200 py-1 px-2 font-serif text-xl text-warm-900 focus:border-blossom-deep outline-none w-40 text-right placeholder:text-warm-300 transition-colors"
            placeholder="이름"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={handleSave}
            className="w-full max-w-xs px-8 py-4 rounded-full bg-warm-900 text-white font-serif text-lg hover:bg-gold-DEFAULT transition-all shadow-xl flex items-center justify-center gap-3 group"
          >
            <span>편지 보내기</span>
            <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <button onClick={onReset} className="text-warm-900/40 hover:text-warm-900 transition-colors text-sm font-serif border-b border-transparent hover:border-warm-900">
          처음으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default WishGenerator;