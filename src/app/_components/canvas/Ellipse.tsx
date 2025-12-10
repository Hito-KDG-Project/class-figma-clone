import type { EllipseLayer } from "~/types";
import { rgbToHex } from "~/utils";

function Ellipse({ id, layer }: { id: string; layer: EllipseLayer }) {
  const { x, y, width, height, fill, stroke, opacity } = layer;
  return (
    <g>
      <ellipse
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
        cx={width / 2}
        cy={height / 2}
        rx={width / 2}
        ry={height / 2}
      />
    </g>
  );
}

export default Ellipse;
