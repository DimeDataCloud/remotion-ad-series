import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";

const CheckBadge: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - delay, fps, config: theme.spring.bouncy });
  const dash = interpolate(frame - delay - 6, [0, 14], [24, 0], {
    easing: theme.ease.out,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: theme.colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        opacity: pop,
        transform: `scale(${interpolate(pop, [0, 1], [0.5, 1])})`,
        boxShadow: `0 0 40px ${theme.colors.glow}`,
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12.5L9.5 18L20 6"
          stroke="#131316"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={24}
          strokeDashoffset={dash}
        />
      </svg>
    </div>
  );
};

export const BookingCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  const float = Math.sin((frame - delay) / 30) * 3;

  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [50, 0]) + float}px) scale(${interpolate(p, [0, 1], [0.92, 1])})`,
        background: theme.colors.surface,
        border: "1px solid rgba(247,245,242,0.08)",
        borderRadius: 28,
        padding: "30px 34px",
        display: "flex",
        alignItems: "center",
        gap: 22,
        width: 780,
        boxShadow: "0 40px 90px -20px rgba(0,0,0,0.6)",
      }}
    >
      <CheckBadge delay={delay + 4} />
      <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: manrope }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: theme.colors.text, letterSpacing: "-0.02em" }}>
          Booking confirmed
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: theme.colors.textDim }}>
          Sarah M. · Tomorrow, 2:00 PM
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: theme.colors.primary, marginTop: 2 }}>
          Answered by AI Receptionist
        </div>
      </div>
    </div>
  );
};
