import React, { useState, useEffect } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import WishGenerator from './components/WishGenerator';
import Hero from './components/Hero';
import { GuestMessage } from './types';

// Initial Static Data
const INITIAL_MESSAGES: GuestMessage[] = [
  {
    id: '1',
    text: `사랑하는 해방둥이 우리 어머님,
어느덧 팔순이라는 귀한 날을 맞이하셨네요.
함께 살아오면서 매일매일 어머님의 사랑과 헌신을 느낀답니다. 
아플 때 걱정해주시고, 힘들 때 위로해주시고, 맛있는 밥 차려주시고…
그 모든 순간들이 저에게는 큰 힘이 됩니다. 
애초에 큰 효도 하는 건... 텄구요 ㅋㅋㅋ

늘 저보다 더 팔팔한 어머니니까
저는 어머니한테 더 기대면서 살려고요. ㅋㅋㅋ
앞으로도 어여삐 여겨주시어요. 
정말 감사하고, 정말 사랑합니다. 오래오래 함께해요.`,
    from: "며느리 숙영",
    color: "bg-warm-50",
    date: '2026.01.17'
  },
  {
    id: '2',
    text: `할머니 어느새 팔순 생신을 축하할 날이 오다니 꿈만 같아요! 태어날때부터 지금까지 거의 21년을 완전 함께한거니까요. 언제나 보살펴주시고 챙겨주시는거 항상 감사히 여기고 소중히해야하는데 그게 마음처럼 쉽지 않네요... 그래도 함께하는 모든 순간 순간에 노력하며 살고 다투지 않고! 더 자랑스런 손자가 될게요! 건강 챙기시고 언제나 행운이 따를거에요! 곧 엄청난 선물도 배송올거니까요!`,
    from: "손자 박지원",
    color: "bg-white",
    date: '2026.01.17'
  },
  {
    id: '3',
    text: `엄마의 팔순 축하드리고
같이 참석을 못해 죄송해요
언제나 건강하시고요.`,
    from: "딸, 제은",
    color: "bg-blossom-light",
    date: '2026.01.17'
  },
  {
    id: '4',
    text: `생신을 진심으로 축하드립니다.
올해도 건강하시고 지금처럼 곁에서 지켜주시면 감사하겠습니다.`,
    from: "사위, 이재훈",
    color: "bg-warm-100",
    date: '2026.01.17'
  }
];

const App: React.FC = () => {
  const [stage, setStage] = useState<'hero' | 'party'>('hero');
  const [isFading, setIsFading] = useState(false);
  const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES);

  // Scroll to top when stage changes, unless we are returning to hero to see messages
  useEffect(() => {
    // Basic scroll reset
    if (stage === 'party') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [stage]);

  const startParty = () => {
    setIsFading(true);
    setTimeout(() => {
      setStage('party');
      setIsFading(false);
    }, 600);
  };

  const reset = () => {
    setIsFading(true);
    setTimeout(() => {
      setStage('hero');
      setIsFading(false);
    }, 600);
  };

  const handleSaveMessage = (text: string, from: string) => {
    const bgColors = ['bg-warm-50', 'bg-blossom-light', 'bg-white', 'bg-warm-100'];
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const today = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const newMessage: GuestMessage = {
      id: Date.now().toString(),
      text,
      from,
      color: randomColor,
      date: today
    };

    setMessages(prev => [newMessage, ...prev]);
    
    // Return to hero and scroll to guestbook
    setIsFading(true);
    setTimeout(() => {
      setStage('hero');
      setIsFading(false);
      // Slight delay to allow DOM to render before scrolling
      setTimeout(() => {
        const guestbookSection = document.getElementById('guestbook-section');
        if (guestbookSection) {
          guestbookSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }, 600);
  };

  return (
    <div className="min-h-screen relative font-sans text-warm-900">
      {/* Texture Overlay */}
      <div className="paper-texture"></div>
      
      <InteractiveBackground />
      
      <main className="container mx-auto px-0 min-h-screen flex flex-col items-center relative z-10 transition-opacity duration-500 ease-in-out">
        <div className={`w-full transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          {stage === 'hero' ? (
            <Hero onStart={startParty} messages={messages} />
          ) : (
            <div className="min-h-screen flex items-center justify-center py-20">
              <WishGenerator onReset={reset} onSave={handleSaveMessage} />
            </div>
          )}
        </div>
      </main>

      {stage === 'hero' && (
        <footer className="w-full text-center text-warm-900/40 text-xs font-serif py-6 relative z-10">
          오래오래 건강하세요 • 사랑합니다
        </footer>
      )}
    </div>
  );
};

export default App;