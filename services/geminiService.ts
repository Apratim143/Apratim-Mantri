import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS } from '../constants';

// Construct the context from the resume data
const RESUME_CONTEXT = `
You are a helpful AI assistant representing ${PERSONAL_INFO.name}.
Your goal is to answer questions about Apratim's professional background, skills, and experience based strictly on the provided resume data below.
Be professional, concise, and enthusiastic.

RESUME DATA:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Contact: ${PERSONAL_INFO.contact.email}, ${PERSONAL_INFO.contact.phone}
Summary: ${PERSONAL_INFO.summary}

SKILLS:
${SKILLS.map(s => `- ${s.category}: ${s.skills.join(', ')}`).join('\n')}

EXPERIENCE:
${EXPERIENCE.map(e => `
- Company: ${e.company}
- Role: ${e.role}
- Period: ${e.period}
- Highlights:
${e.description.map(d => `  * ${d}`).join('\n')}
`).join('\n')}

PROJECTS:
${PROJECTS.map(p => `
- Name: ${p.name}
- Role: ${p.role || 'N/A'}
- Link: ${p.link || 'N/A'}
- Description: ${p.description}
`).join('\n')}

EDUCATION:
${EDUCATION.map(e => `
- Institution: ${e.institution}
- Degree: ${e.degree}
- Period: ${e.period}
${e.details ? e.details.join('\n') : ''}
`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `
- Name: ${c.title}
- Issuer: ${c.issuer}
- Date: ${c.date}
`).join('\n')}
`;

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      return "I'm sorry, my AI brain is currently offline (Missing API Key). Please refer to the resume text on the page.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try asking again.";
  }
};