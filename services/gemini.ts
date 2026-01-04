
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateRecipe(ingredients: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on these ingredients: ${ingredients}, create a creative and delicious gourmet recipe. Return it in JSON format.`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recipeName: { type: Type.STRING },
          prepTime: { type: Type.STRING },
          difficulty: { type: Type.STRING },
          ingredients: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          instructions: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ['recipeName', 'prepTime', 'difficulty', 'ingredients', 'instructions']
      }
    }
  });

  try {
    return JSON.parse(response.text.trim());
  } catch (err) {
    throw new Error("Invalid response format from AI");
  }
}
