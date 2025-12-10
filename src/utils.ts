import type React from "react";
import type { Camera, Color, Point } from "./types";

function clampRgbValue(value: number): number {
  return Math.max(0, Math.min(255, value));
}

function convertRgbToHex(rgb: number): string {
  return rgb.toString(16).padStart(2, "0");
}

export function rgbToHex(color: Color) {
  const rHex = convertRgbToHex(clampRgbValue(color.r));
  const gHex = convertRgbToHex(clampRgbValue(color.g));
  const bHex = convertRgbToHex(clampRgbValue(color.b));
  return `#${rHex}${gHex}${bHex}`;
}

export const pointerEventToCanvasPoint = (
  e: React.PointerEvent,
  camera: Camera,
): Point => {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
};
