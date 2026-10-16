import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

export const PhoneRings: React.FC<{
  color: string;
  size?: number;
  maxR?: number;
  period?: number;
  ringCount?: number;
  dotPulse?: boolean;
}> = ({ color, size = 46, maxR = 260, period = 44, ringCount = 4, dotPulse = true }) => {
  const frame = useCurrentFrame();
  const dotP = dotPulse ? 1 + Math.sin(frame / 8) * 0.06 : 1;

  return (
    <div style={{ position: "relative", width: maxR * 2, height: maxR * 2 }}>
      {Array.from({ length: ringCount }).map((_, i) => {
        const phase = (frame + i * (period / ringCount)) % period;
        const p = phase / period;
        const r = interpolate(p, [0, 1], [size * 0.9, maxR], { easing: theme.ease.out });
        const o = interpolate(p, [0, 0.15, 1], [0, 0.5, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: r * 2,
              height: r * 2,
              marginLeft: -r,
              marginTop: -r,
              borderRadius: "50%",
              border: `2px solid ${color}`,
              opacity: o,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          borderRadius: "50%",
          background: color,
          transform: `scale(${dotP})`,
          boxShadow: `0 0 ${size * 1.4}px ${color}88`,
        }}
      />
    </div>
  );
};
