"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Bot,
  User,
  Loader2,
  MessageSquare,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { PdfViewerModal } from "@/components/pdf-viewer-model";

type Message = {
  role: "user" | "assistant";
  content: string;
  sources?: number[];
};

const EXAMPLE_QUESTIONS = [
  "How does Solix EDMS assess archive eligibility for database data?",
  "What is the process for performing data masking in Solix EDMS?",
  "How does Solix EDMS forecast future data growth?",
  "What are the key features of Solix EDMS Data Validation?",
];

// Replace this with your actual PDF URL
const PDF_URL = "/manual.pdf";

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatController, setChatController] = useState<AbortController | null>(
    null
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [currentPdfPage, setCurrentPdfPage] = useState(1);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); //Fixed useEffect dependency

  const handleSubmit = async (e: React.FormEvent, question?: string) => {
    e.preventDefault();
    const userMessage = question || input;
    if (userMessage.trim() === "" || isLoading) return;

    setIsLoading(true);
    const newMessages: Message[] = [
      ...messages,
      { role: "user" as const, content: userMessage },
    ];
    setMessages(newMessages);
    setInput("");

    try {
      if (chatController) {
        chatController.abort();
      }
      const controller = new AbortController();
      setChatController(controller);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatHistory: newMessages.slice(0, -1),
          message: userMessage,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.data.content,
          sources: data.data.sourcePages,
        },
      ]);
      setChatController(null);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetHistory = () => {
    setMessages([]);
    setInput("");
    if (chatController) {
      chatController.abort("Reset chat history");
      setChatController(null);
    }
  };

  const openPdfAtPage = (pageNumber: number) => {
    setCurrentPdfPage(pageNumber);
    setIsPdfModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="text-2xl font-bold text-[#E31837]">SOLIX</div>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>
      </header>

      <main className="flex-1 py-6 overflow-hidden mx-8">
        <Card className="w-full h-full flex flex-col">
          <CardHeader className="border-b bg-gray-50/50">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-[#E31837]" />
              <div>
                <CardTitle>Solix EDMS Documentation Assistant</CardTitle>
                <CardDescription>
                  Ask questions about features, configuration, and usage
                </CardDescription>
              </div>
              {messages.length > 0 && (
                <Button
                  className="ml-auto"
                  variant="link"
                  onClick={resetHistory}
                >
                  New Chat
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <Bot className="h-12 w-12 text-[#E31837]" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">
                      Welcome to Solix EDMS Assistant
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm mb-6">
                      I&apos;m here to help you with any questions about Solix
                      Enterprise Data Management Suite.
                    </p>
                  </div>
                  <div className="grid gap-4 w-full max-w-lg">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-left">
                        Try asking about:
                      </p>
                      <div className="grid gap-2">
                        {EXAMPLE_QUESTIONS.map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start text-sm h-auto py-3 px-4"
                            onClick={(e) => handleSubmit(e, question)}
                          >
                            <MessageSquare className="mr-2 h-4 w-4 text-[#E31837] shrink-0" />
                            <span className="text-left">{question}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-[#E31837]/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-[#E31837]" />
                        </div>
                      )}
                      <div
                        className={`rounded-lg px-4 py-2 max-w-[80%] flex flex-col gap-2 ${
                          message.role === "user"
                            ? "bg-[#E31837] text-white ml-4"
                            : "bg-gray-100"
                        }`}
                      >
                        <ReactMarkdown
                          className={cn(
                            "prose prose-sm",
                            message.role === "user" && "prose-invert text-white"
                          )}
                          remarkPlugins={[remarkGfm]}
                        >
                          {message.content}
                        </ReactMarkdown>
                        {message.role === "assistant" &&
                          message.sources &&
                          message.sources.length > 0 && (
                            <div className="text-xs text-gray-500 mt-1">
                              Sources:{" "}
                              {message.sources.map((source, index) => (
                                <span key={index}>
                                  <button
                                    onClick={() => openPdfAtPage(source)}
                                    className="text-[#E31837] hover:underline"
                                  >
                                    Page {source}
                                  </button>
                                  {index < message.sources!.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-[#E31837] flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="w-8 h-8 rounded-full bg-[#E31837]/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-[#E31837]" />
                      </div>
                      <div className="rounded-lg px-4 py-2 bg-gray-100 ml-3">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin text-[#E31837]" />
                          <span className="text-sm text-gray-500">
                            Answering...
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex gap-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-[#E31837] hover:bg-[#E31837]/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="w-full border-t py-4 bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <p>Solix EDMS Standard Edition 2.2</p>
          <p>© 2024 Solix Technologies, Inc.</p>
        </div>
      </footer>

      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        pdfUrl={PDF_URL}
        pageNumber={currentPdfPage}
      />
    </div>
  );
}
