import { GoogleGenAI } from "@google/genai";
import { WishRequest } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBirthdayWish = async (request: WishRequest): Promise<string> => {
  try {
    const ai = getClient();
    
    const prompt = `
      작성해 주세요: 생일 축하 메시지.
      
      받는 사람 이름: ${request.name}
      관계: ${request.relation}
      나이(선택사항): ${request.age ? request.age : '언급 안함'}
      스타일: ${request.style}
      
      조건:
      1. 한국어로 자연스럽게 작성하세요.
      2. 이모지를 적절히 사용하여 축제 분위기를 내세요.
      3. ${request.style} 톤을 반드시 유지하세요.
      4. 길이는 3~4문장 정도로 SNS나 카드로 보내기 좋게 작성하세요.
      5. 결과만 텍스트로 출력하세요.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "생일 축하 메시지를 생성하는 중 오류가 발생했습니다. 다시 시도해 주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI가 잠시 파티를 즐기러 갔나 봐요! 잠시 후 다시 시도해 주세요. 🎉";
  }
};