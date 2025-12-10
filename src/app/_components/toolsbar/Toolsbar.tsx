import type { CanvasState } from "~/types";

export default function Toolsbar({
  canvasState,
  setCanvasState,
}: {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-2xl bg-white p-1 shadow-md">
      <div className="flex items-center justify-center gap-3"></div>
    </div>
  );
}
