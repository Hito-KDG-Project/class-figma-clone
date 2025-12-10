import { Liveblocks } from "@liveblocks/node";
import { env } from "~/env";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

const liveblocks = new Liveblocks({
  secret: env.LIVE_BLOCKS_SECRET_KEY as string,
});

export async function POST(req: Request) {
  const userSession = await auth();

  if (!userSession?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { room } = (await req.json()) as { room: string };

  const user = await db.user.findUniqueOrThrow({
    where: { id: userSession?.user.id },
  });

  if (!user) {
    return new Response("User not found", { status: 403 });
  }

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name: user.email ?? "Anonymous",
    },
  });

  session.allow(room, session.FULL_ACCESS);

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}
