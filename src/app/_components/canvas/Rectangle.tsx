import type { RectangleLayer } from "~/types";
import { rgbToHex } from "~/utils";

function Rectangle({ id, layer }: { id: string; layer: RectangleLayer }) {
  const { x, y, width, height, fill, stroke, opacity, cornerRadius } = layer;
  return (
    <g>
      <rect
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill ? rgbToHex(fill) : "#ccc"}
        strokeWidth={1}
        stroke={stroke ? rgbToHex(stroke) : "#ccc"}
        opacity={opacity}
        radius={cornerRadius}
        rx={cornerRadius ?? 0}
        ry={cornerRadius ?? 0}
      />
    </g>
  );
}

export default Rectangle;
