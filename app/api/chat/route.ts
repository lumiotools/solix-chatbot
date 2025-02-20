import { ChatEngine } from "@/services/chat";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { message, chatHistory = [] } = await request.json();

  if (!message) {
    return NextResponse.json(
      {
        success: false,
        error: "Message is required",
      },
      { status: 400 }
    );
  }

  try {
    const response = await ChatEngine.chat({
      message,
      chatHistory,
    });

    let data = JSON.parse(response.message.content as string);
    if (data.type === "object") {
      data = data.properties;
    }

    console.log(data["sources"]);

    if (!data.isSuccess) {
      return NextResponse.json({
        success: true,
        message: "Chatbot response",
        data: {
          content: data.answer,
          sources: [],
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Chatbot response",
      data: {
        content: data.answer,
        sources: data.sources.map(
          (source: { page: string; snippet: string }) => ({
            page: Number(source.page) + 1,
            snippet: source.snippet,
          })
        ),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
};
