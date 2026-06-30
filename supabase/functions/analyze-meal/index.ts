import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req: Request) => {
  try {
    const { meal } = await req.json();

    const apiKey = Deno.env.get("OPENAI_API_KEY");

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `
Jesteś dietetykiem.

Na podstawie opisu posiłku:

${meal}

Oszacuj makroskładniki.

Zwróć WYŁĄCZNIE JSON.

{
  "calories": number,
  "protein": number,
  "carbs": number,
  "fat": number
}
`,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(json), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const text = json.output[0].content[0].text;

    const clean = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return new Response(clean, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: err.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});