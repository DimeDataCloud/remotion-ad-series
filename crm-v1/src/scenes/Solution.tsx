import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { Logo } from "../components/Logo";
import { WordReveal } from "../components/WordReveal";
import { PipelineTrack } from "../components/PipelineTrack";
import { LeadCard } from "../components/LeadCard";

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
        gap: 40,
        padding: "0 80px",
      }}
    >
      <Logo delay={4} width={300} />
      <WordReveal
        text="CRM + Automation"
        delay={22}
        per={3}
        highlight={[2]}
        style={{ fontSize: 64, justifyContent: "center", textAlign: "center" }}
      />
      <WordReveal
        text="Every lead followed up automatically."
        delay={50}
        per={3}
        style={{ fontSize: 32, fontWeight: 600, color: theme.colors.textDim, justifyContent: "center", textAlign: "center" }}
      />
      <div style={{ marginTop: 6 }}>
        <PipelineTrack delay={72} travelFrames={68} />
      </div>
      <LeadCard delay={128} state="auto" />
    </AbsoluteFill>
  );
};
