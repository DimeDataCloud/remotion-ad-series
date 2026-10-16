import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";

type LeadState = "new" | "cold" | "auto";

const STATE_COPY: Record<LeadState, { pill: string; pillColor: string; pillBg: string; dim: boolean }> = {
  new: { pill: "New lead", pillColor: theme.colors.textDim, pillBg: "rgba(247,245,242,0.08)", dim: false },
  cold: { pill: "No follow-up · 4 days", pillColor: theme.colors.danger, pillBg: "rgba(233,72,63,0.12)", dim: true },
  auto: { pill: "Follow-up sent automatically", pillColor: theme.colors.primary, pillBg: "rgba(240,180,41,0.12)", dim: false },
};

export const LeadCard: React.FC<{ delay?: number; state: LeadState; shake?: boolean }> = ({
  delay = 0,
  state,
  shake = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  const copy = STATE_COPY[state];
  const shakeX = shake ? Math.sin((frame - delay) / 3) * interpolate(frame - delay, [0, 10, 24], [0, 5, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

  return (
    <div
      style={{
        opacity: p * (copy.dim ? 0.72 : 1),
        transform: `translateY(${interpolate(p, [0, 1], [40, 0])}px) translateX(${shakeX}px) scale(${interpolate(p, [0, 1], [0.92, 1])})`,
        background: theme.colors.surface,
        border: "1px solid rgba(247,245,242,0.08)",
        borderRadius: 26,
        padding: "28px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        width: 720,
        fontFamily: manrope,
        boxShadow: "0 40px 90px -20px rgba(0,0,0,0.6)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 30, fontWeight: 800, color: theme.colors.text, letterSpacing: "-0.02em" }}>
          Sarah K.
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: theme.colors.textDim }}>Website inquiry</div>
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          background: copy.pillBg,
          border: `1px solid ${copy.pillColor}55`,
          borderRadius: 999,
          padding: "9px 20px",
          fontSize: 20,
          fontWeight: 700,
          color: copy.pillColor,
        }}
      >
        {copy.pill}
      </div>
    </div>
  );
};
