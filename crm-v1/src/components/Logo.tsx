import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Logo: React.FC<{ delay?: number; width?: number }> = ({ delay = 0, width = 380 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.bouncy });
  const breathe = 1 + Math.sin((frame - delay) / 26) * 0.012;

  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [26, 0])}px) scale(${interpolate(p, [0, 1], [0.8, 1]) * breathe})`,
        filter: `drop-shadow(0 0 ${36 * p}px ${theme.colors.glow})`,
      }}
    >
      <Img src={staticFile("dimedata-logo.svg")} style={{ width, display: "block" }} />
    </div>
  );
};
