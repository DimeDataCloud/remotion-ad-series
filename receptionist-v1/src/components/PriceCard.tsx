import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";

export const PriceCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.bouncy });
  const pillP = spring({ frame: frame - delay - 10, fps, config: theme.spring.snappy });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        fontFamily: manrope,
      }}
    >
      <div
        style={{
          opacity: p,
          transform: `translateY(${interpolate(p, [0, 1], [36, 0])}px) scale(${interpolate(p, [0, 1], [0.86, 1])})`,
          fontSize: 108,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          color: theme.colors.text,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        $299 <span style={{ color: theme.colors.primary }}>+</span> $299/mo
      </div>
      <div
        style={{
          opacity: pillP,
          transform: `translateY(${interpolate(pillP, [0, 1], [18, 0])}px)`,
          background: "rgba(240,180,41,0.12)",
          border: `1px solid ${theme.colors.primary}55`,
          borderRadius: 999,
          padding: "12px 28px",
          fontSize: 26,
          fontWeight: 700,
          color: theme.colors.primary,
          letterSpacing: "-0.01em",
        }}
      >
        200 min/mo included
      </div>
    </div>
  );
};
