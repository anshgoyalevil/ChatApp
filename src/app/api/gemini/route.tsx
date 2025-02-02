import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest) {
  const req = await request.json();
  console.log(req.message);

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = req.message;

  const completion = await model.generateContentStream(prompt);

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for await (const item of completion.stream) {
        const textChunk = item.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textChunk) {
          controller.enqueue(encoder.encode(textChunk));
        }
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}

export function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}
