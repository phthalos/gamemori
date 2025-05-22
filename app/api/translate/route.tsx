import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "DeepL API 키 없음" }, { status: 500 });
    }

    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `DeepL-Auth-Key ${apiKey}`,
      },
      body: new URLSearchParams({
        text,
        target_lang: "KO",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepL 응답 실패:", errorText);
      return NextResponse.json({ error: "DeepL API 오류" }, { status: 500 });
    }

    const result = await response.json();
    return NextResponse.json({ translated: result.translations[0].text });
  } catch (error) {
    console.error("API 오류:", error);
    return NextResponse.json({ error: "서버 내부 오류" }, { status: 500 });
  }
}
