import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});

export async function GET() {
  try {
    const { rows } = await pool.query(`
            SELECT id from image i WHERE NOT EXISTS ( SELECT 1 FROM posted p WHERE p.image_id = i.id)`);

    const ids = rows.map((r) => Number(r.id));

    return new Response(JSON.stringify(ids), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("API Error:", err);

    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
