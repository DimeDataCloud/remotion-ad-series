import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { WordReveal } from "../components/WordReveal";
import { LeadCard } from "../components/LeadCard";

export const Agitate: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const exitO = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    easing: theme.ease.in,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fade = interpolate(frame, [40, durationInFrames - 24], [1, 0.22], {
    easing: theme.ease.inOut,
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
        gap: 60,
        padding: "0 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <WordReveal
          text="Spreadsheets don't remind you."
          delay={4}
          per={3}
          style={{ fontSize: 58, justifyContent: "center", textAlign: "center" }}
        />
        <WordReveal
          text="By day 5, they've booked someone else."
          delay={44}
          per={3}
          highlight={[5, 6]}
          highlightColor={theme.colors.danger}
          style={{ fontSize: 36, fontWeight: 600, color: theme.colors.textDim, justifyContent: "center", textAlign: "center" }}
        />
      </div>
      <div style={{ opacity: fade }}>
        <LeadCard delay={20} state="cold" />
      </div>
    </AbsoluteFill>
  );
};
