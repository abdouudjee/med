import { doctor } from "@/app/db/schema";
import { db } from "@/app/db/index";

export async function GET(request: Request) {
    const res = await db.select().from(doctor);
    return Response.json({ doctors: res })
}