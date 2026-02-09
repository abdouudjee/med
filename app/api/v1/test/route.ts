import { users } from "@/app/db/schema";
import { db } from "@/app/db/index"
export async function GET(request: Request) {
    const res = await db.select().from(users);
    return Response.json({ test: 'save value to secure store...', res })
}