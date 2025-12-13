import { useRef, useState } from "react";
import { CanvasMode } from "~/types";
import IconButton from "./IconButton";
import { BiHandicap, BiPointer } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";

interface Props {
  isActive: boolean;
  canvasMode: CanvasMode;
  onClick: (canvasMode: CanvasMode.None | CanvasMode.Dragging) => void;
}

export default function SelectionButton({
  isActive,
  canvasMode,
  onClick,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (canvasMode: CanvasMode.None | CanvasMode.Dragging) => {
    onClick(canvasMode);
    setIsOpen(false);
  };

  return (
    <div className="relative flex" ref={menuRef}>
      {/* SelectionButton */}
      <IconButton
        isActive={isOpen}
        onClick={() => CanvasMode.None}
        disabled={false}
      >
        {canvasMode !== CanvasMode.None &&
          canvasMode !== CanvasMode.Dragging && (
            <BiPointer className="h-5 w-5" />
          )}
        {canvasMode === CanvasMode.None && <BiPointer className="h-5 w-5" />}
        {canvasMode === CanvasMode.Dragging && (
          <FaRegHandPaper className="h-5 w-5" />
        )}
      </IconButton>
      <button onClick={() => setIsOpen(!isOpen)} className="ml-1">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M3.646 6.354l-3-3 .708-.708L4 5.293l2.646-2.647.708.708-3 3L4 6.707l-.354-.353z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute -top-20 mt-1 min-w-[150px] rounded-xl bg-[#1e1e1e] p-2 shadow-lg">
          <button
            className={`flex w-full items-center rounded-md p-1 text-white transition-colors delay-10 duration-70 hover:bg-blue-500 ${canvasMode === CanvasMode.None ? "bg-blue-600" : ""}`}
            onClick={() => handleClick(CanvasMode.None)}
          >
            <BiPointer className="mr-2 h-3.5 w-3.5" />
            <span className="text-sm">Move</span>
          </button>
          <button
            className={`flex w-full items-center rounded-md p-1 text-white transition-colors delay-10 duration-70 hover:bg-blue-500 ${canvasMode === CanvasMode.Dragging ? "bg-blue-600" : ""}`}
            onClick={() => handleClick(CanvasMode.Dragging)}
          >
            <FaRegHandPaper className="mr-2 h-3.5 w-3.5" />
            <span className="text-sm">Hand tool</span>
          </button>
        </div>
      )}
    </div>
  );
}
