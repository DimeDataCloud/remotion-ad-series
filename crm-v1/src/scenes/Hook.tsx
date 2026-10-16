import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { WordReveal } from "../components/WordReveal";
import { LeadCard } from "../components/LeadCard";

export const Hook: React.FC = () => {
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
        gap: 56,
      }}
    >
      <WordReveal
        text="LEADS GO COLD."
        delay={4}
        per={3}
        highlight={[2]}
        highlightColor={theme.colors.danger}
        style={{ fontSize: 96, justifyContent: "center", textAlign: "center" }}
      />
      <LeadCard delay={30} state="cold" shake />
    </AbsoluteFill>
  );
};
