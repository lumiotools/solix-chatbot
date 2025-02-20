import { storageContextFromDefaults, VectorStoreIndex } from "llamaindex";
import { OpenAI } from "llamaindex/llm/openai";
import path from "path";

const storageContext = await storageContextFromDefaults({
  persistDir: path.join(process.cwd(), "knowledge"),
});

const index = await VectorStoreIndex.init({
  storageContext,
});

export const ChatEngine = index.asChatEngine({
  similarityTopK: 5,
  chatModel: new OpenAI({
    model: "gpt-4o-mini",
    additionalChatOptions: {
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "solix-chatbot",
          schema: {
            type: "object",
            properties: {
              answer: {
                type: "string",
              },
              isSuccess: {
                type: "boolean",
              },
              sources: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    page: {
                      type: "string",
                    },
                    snippet: {
                      type: "string",
                      description: "The exact paragraph snippet from the original source page, that helped in deriving the answer."
                    }
                  },
                  required: ["page", "snippet"],
                  strict: true,
                },
              },
            },
            required: ["answer", "isSuccess", "sources"]
          },
        },
      },
    },
  }),
  systemPrompt: `
    You are a AI Chatbot developed by Lumio AI, 
    and you have deep knowledge about Solix Enterprise Data Management Suite (Standard Edition) 2.2, 
    you can answer user queries based on the knowledge you have.
    If you are asked a question that you don't know the answer to, you can simply reply to the user that you don't know the answer to that question.
  `,
});
