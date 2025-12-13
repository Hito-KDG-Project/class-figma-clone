import { CanvasMode, type CanvasState } from "~/types";
import SelectionButton from "./SelectionButton";

export default function Toolsbar({
  canvasState,
  setCanvasState,
}: {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-md bg-white p-1 shadow-md">
      <div className="flex items-center justify-center gap-3"></div>
      <SelectionButton
        isActive={canvasState.mode === CanvasMode.None}
        canvasMode={canvasState.mode}
        onClick={(canvasMode) =>
          setCanvasState(
            canvasMode === CanvasMode.Dragging
              ? { mode: canvasMode, point: null }
              : { mode: canvasMode },
          )
        }
      />
    </div>
  );
}
