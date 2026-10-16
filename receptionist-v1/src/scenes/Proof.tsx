import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { WordReveal } from "../components/WordReveal";
import { PriceCard } from "../components/PriceCard";

export const Proof: React.FC = () => {
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
        gap: 54,
      }}
    >
      <WordReveal
        text="Live in days. Not months."
        delay={4}
        per={3}
        highlight={[2]}
        style={{ fontSize: 62, justifyContent: "center", textAlign: "center" }}
      />
      <PriceCard delay={40} />
    </AbsoluteFill>
  );
};
