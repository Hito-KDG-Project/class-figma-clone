"use client";

import type { ReactNode } from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
  RoomProvider,
} from "@liveblocks/react";
import { LiveList, LiveMap } from "@liveblocks/client";
import type { LiveObject } from "@liveblocks/client";
import type { Layer } from "~/types";
import Image from "next/image";

export default function Room({
  children,
  roomId,
}: {
  children: ReactNode;
  roomId: string;
}) {
  return (
    <div>
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
        <RoomProvider
          id={roomId}
          initialPresence={{
            selection: [],
            cursor: null,
            penColor: null,
            pencilDraft: null,
          }}
          initialStorage={{
            roomColor: { r: 30, g: 30, b: 30 },
            layers: new LiveMap<string, LiveObject<Layer>>(),
            layerIds: new LiveList([]),
          }}
        >
          <ClientSideSuspense
            fallback={
              <div className="mt-15 flex flex-col items-center justify-center gap-2">
                <Image
                  src="/favicon.ico"
                  alt="Figma"
                  className="h-[50px] animate-bounce"
                  width={48}
                  height={48}
                />
                <h1 className="text-sm font-bold">ローディング</h1>
              </div>
            }
          >
            {children}
          </ClientSideSuspense>
        </RoomProvider>
      </LiveblocksProvider>
    </div>
  );
}
