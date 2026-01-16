import React from 'react';

// User provided images with warm, celebratory captions
const rawPhotos = [
  { url: 'https://i.ifh.cc/VpC7zR.jpg', caption: '사랑하는 가족' },
  { url: 'https://i.ifh.cc/Hhb79h.jpg', caption: '소중한 추억' },
  { url: 'https://i.ifh.cc/PgvZ93.jpg', caption: '아름다운 미소' },
  { url: 'https://i.ifh.cc/s8aAXq.jpg', caption: '함께한 세월' },
  { url: 'https://i.ifh.cc/JN4rLs.jpg', caption: '따뜻한 품' },
  { url: 'https://i.ifh.cc/6FRgmk.jpg', caption: '은혜로운 삶' },
  { url: 'https://i.ifh.cc/VYYX0T.jpg', caption: '행복한 순간' },
  { url: 'https://i.ifh.cc/yl2chP.jpg', caption: '건강하세요' },
  { url: 'https://i.ifh.cc/56vCnS.jpg', caption: '영원한 사랑' },
  { url: 'https://i.ifh.cc/7l0OwY.jpg', caption: '꽃보다 고운 당신' },
  { url: 'https://i.ifh.cc/AtP6D3.jpg', caption: '기억의 조각' },
  { url: 'https://i.ifh.cc/CQJ8kw.jpg', caption: '빛나는 날들' },
  { url: 'https://i.ifh.cc/cVbZkJ.jpg', caption: '감사합니다' },
  { url: 'https://i.ifh.cc/QnPDYb.jpg', caption: '존경합니다' },
  { url: 'https://i.ifh.cc/hMn0xf.jpg', caption: '축복합니다' },
  { url: 'https://i.ifh.cc/TnFrVz.jpg', caption: '나의 할머니' },
  { url: 'https://i.ifh.cc/Q6XAf6.jpg', caption: '따스한 햇살' },
  { url: 'https://i.ifh.cc/NhLt1o.jpg', caption: '아름다운 동행' },
  { url: 'https://i.ifh.cc/2yyFct.jpg', caption: '사랑합니다' },
  { url: 'https://i.ifh.cc/xmWG3H.jpg', caption: '희망찬 내일' },
  { url: 'https://i.ifh.cc/JvdSbV.jpg', caption: '포근한 미소' },
  { url: 'https://i.ifh.cc/kzDC68.jpg', caption: '가족의 힘' },
  { url: 'https://i.ifh.cc/N6FTJh.jpg', caption: '빛나는 순간' },
  { url: 'https://i.ifh.cc/23tPH6.jpg', caption: '사랑의 기억' },
  { url: 'https://i.ifh.cc/7G2NW1.jpg', caption: '고마운 당신' },
  { url: 'https://i.ifh.cc/2gDKSn.jpg', caption: '축복의 시간' },
  { url: 'https://i.ifh.cc/J3tFFD.jpg', caption: '함께 웃어요' },
  { url: 'https://i.ifh.cc/aDOoHq.jpg', caption: '아름다운 인생' },
  { url: 'https://i.ifh.cc/t3QpLb.jpg', caption: '영원히 함께' }
];

const WaterfallColumn: React.FC<{ 
  images: typeof rawPhotos, 
  speed: string, 
  offset?: string 
}> = ({ images, speed, offset = 'mt-0' }) => {
  return (
    <div className={`relative h-[800px] overflow-hidden group w-full ${offset}`}>
      {/* 
        To create an infinite scroll, we duplicate the list. 
        The animation translates Y from -50% to 0%.
      */}
      <div className={`absolute w-full ${speed} group-hover:[animation-play-state:paused]`}>
        {/* Set 1 */}
        {images.map((photo, idx) => (
          <div key={`set1-${idx}`} className="mb-6 break-inside-avoid px-2">
            <div className="bg-white p-3 pb-8 rounded shadow-lg border border-warm-200 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-500">
                <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-center font-handwriting font-serif text-warm-900/80 text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
        {/* Set 2 (Duplicate for loop) */}
        {images.map((photo, idx) => (
          <div key={`set2-${idx}`} className="mb-6 break-inside-avoid px-2">
            <div className="bg-white p-3 pb-8 rounded shadow-lg border border-warm-200 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale-[30%] hover:grayscale-0 transition-all duration-500">
                <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover" />
              </div>
              <p className="mt-3 text-center font-handwriting font-serif text-warm-900/80 text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoCollage: React.FC = () => {
  // Distribute 29 photos into 3 columns (10, 10, 9 distribution)
  const col1 = rawPhotos.slice(0, 10);
  const col2 = rawPhotos.slice(10, 20);
  const col3 = rawPhotos.slice(20, 29);

  return (
    <div className="w-full relative overflow-hidden bg-warm-50/50 py-20">
      
      {/* Header */}
      <div className="relative z-10 text-center mb-10 px-4">
        <h3 className="text-3xl md:text-5xl font-serif text-warm-900 font-bold mb-4">
          함께한 80년, 아름다운 동행
        </h3>
        <p className="text-warm-900/60 font-sans text-lg">
          흘러간 시간만큼 깊어진 사랑의 기록들
        </p>
      </div>

      {/* Gradient Masks for smooth entry/exit */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-warm-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-warm-50 to-transparent z-10 pointer-events-none"></div>

      {/* Waterfall Container */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-2 md:gap-6 h-[600px] md:h-[800px] overflow-hidden">
        
        {/* Column 1: Slow */}
        <WaterfallColumn images={col1} speed="animate-scroll-down-slow" offset="mt-12" />
        
        {/* Column 2: Fast (Center, focusing attention) */}
        <WaterfallColumn images={col2} speed="animate-scroll-down-fast" offset="mt-0" />
        
        {/* Column 3: Medium */}
        <WaterfallColumn images={col3} speed="animate-scroll-down" offset="mt-24" />
        
      </div>
    </div>
  );
};

export default PhotoCollage;