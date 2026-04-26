import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { program, question } = await req.json();

    let webData = "";

    // 🔹 SERPER SEARCH
    try {
      const searchRes = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: {
          "X-API-KEY": process.env.SERPER_API_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: `${program} career scope India salary`,
        }),
      });

      const data = await searchRes.json();
      webData =
        data?.organic?.map((r) => r.snippet).join("\n") || "";
    } catch {}

    let suggestion = "No response";

    // 🔹 GROQ AI
    try {
      const aiRes = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GROQ_API_KEY || ""}`,
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              { role: "system", content: "Career advisor AI" },
              {
                role: "user",
                content: `Program: ${program}\n${webData}\n${question}`,
              },
            ],
          }),
        }
      );

      const aiData = await aiRes.json();
      suggestion =
        aiData?.choices?.[0]?.message?.content || "No response";
    } catch {}

    return NextResponse.json({
      success: true,
      data: {
        score: 0.7,
        risk: 0.3,
        roi: 0.8,
        suggestion,
      },
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
