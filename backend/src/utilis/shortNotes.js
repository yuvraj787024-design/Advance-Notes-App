const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
});

async function generatePlan({
    subject,
    chapter,
    notes
}) {

    try {


        const prompt = `
You are an expert teacher.

Subject: ${subject}
Chapter: ${chapter}

Notes:
${notes}

Instructions:
- Compress the notes into short notes
- Keep only important concepts
- Use bullet points
- Include important formulas if present
- Include important definitions
- Include important numericals if applicable
- Include 3 viva questions with answers
- Keep response under 400 words
Format:

Return ONLY valid JSON.

{
  "shortNotes": [
    "point 1",
    "point 2"
  ],
  "formulas": [
    "formula 1"
  ],
  "definitions": [
    "definition 1"
  ],
  "numericals": [
    "numerical 1"
  ],
  "vivaQuestions": [
    {
      "question": "question 1",
      "answer": "answer 1"
    },
    {
      "question": "question 2",
      "answer": "answer 2"
    },
    {
      "question": "question 3",
      "answer": "answer 3"
    }
  ]
}

Do not return markdown.
Do not return explanation.
Do not wrap JSON inside code blocks.
Return only pure JSON.
`;



        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
    
        });

        const result =
response.candidates[0].content.parts[0].text;

return JSON.parse(result);

    } catch (error) {

        console.log("🔥 GOOGLE API ERROR:");
        console.log(error);

        throw new Error(
            error.message || "Error in compressing notes"
        );
    }
}

module.exports = generatePlan;