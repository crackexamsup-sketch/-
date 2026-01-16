import React from 'react';

const messages = [
  {
    text: "어머니, 80년이라는 긴 세월 동안 저희를 든든하게 지켜주셔서 감사합니다. 이제는 저희가 어머니의 버팀목이 되어드릴게요. 사랑합니다.",
    from: "큰아들",
    color: "bg-warm-50"
  },
  {
    text: "할머니! 생신 너무너무 축하드려요. 할머니가 해주시는 김치찌개가 세상에서 제일 맛있어요! 오래오래 건강하셔야 해요~ ❤️",
    from: "귀염둥이 막내 손녀",
    color: "bg-blossom-light"
  },
  {
    text: "여사님, 팔순을 진심으로 축하드립니다. 늘 고우신 미소 잃지 마시고, 앞으로도 꽃길만 걸으시길 며느리가 기도할게요.",
    from: "큰 며느리",
    color: "bg-white"
  },
  {
    text: "세상에서 가장 존경하는 우리 엄마. 엄마의 딸로 태어나서 정말 행복해요. 다시 태어나도 엄마 딸 할거야. 사랑해 엄마!",
    from: "둘째 딸",
    color: "bg-warm-100"
  },
  {
    text: "할머니, 대학 합격했을 때 제일 먼저 기뻐해주시던 모습이 아직도 눈에 선해요. 멋진 손자가 되어서 효도할게요! 건강하세요.",
    from: "장손",
    color: "bg-warm-50"
  },
  {
    text: "사랑하는 장모님, 생신 축하드립니다. 항상 부족한 사위 아껴주셔서 감사합니다. 오늘 하루 세상에서 제일 행복하시길 바랍니다.",
    from: "둘째 사위",
    color: "bg-white"
  }
];

const FamilyMessages: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 relative">
       {/* Section Title */}
       <div className="text-center mb-16 space-y-4">
        <h3 className="text-3xl md:text-4xl font-serif text-warm-900 font-bold">
          사랑을 담아 전하는 말
        </h3>
        <p className="text-warm-900/60 font-sans">
          가족들의 마음을 모아 할머니께 드립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`group p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-warm-200 ${msg.color}`}
          >
            {/* Quote Icon */}
            <div className="text-gold-DEFAULT/20 text-4xl font-serif mb-4">"</div>
            
            <p className="text-warm-900/80 text-lg leading-relaxed font-serif mb-6 break-keep">
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

export default FamilyMessages;