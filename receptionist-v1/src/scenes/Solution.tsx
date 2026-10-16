import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { Logo } from "../components/Logo";
import { WordReveal } from "../components/WordReveal";
import { BookingCard } from "../components/BookingCard";

export const Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const exitO = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    easing: theme.ease.in,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: exitO,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 46,
        padding: "0 80px",
      }}
    >
      <Logo delay={4} width={300} />
      <WordReveal
        text="24/7 AI Receptionist"
        delay={22}
        per={3}
        highlight={[0]}
        style={{ fontSize: 68, justifyContent: "center", textAlign: "center" }}
      />
      <WordReveal
        text="Every call answered. Every job booked."
        delay={54}
        per={3}
        style={{ fontSize: 34, fontWeight: 600, color: theme.colors.textDim, justifyContent: "center", textAlign: "center" }}
      />
      <div style={{ marginTop: 10 }}>
        <BookingCard delay={95} />
      </div>
    </AbsoluteFill>
  );
};
