import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { PhoneRings } from "../components/PhoneRings";
import { WordReveal } from "../components/WordReveal";

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
      <PhoneRings color={theme.colors.danger} maxR={230} period={38} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <WordReveal
          text="MISSED CALL."
          delay={4}
          per={3}
          highlight={[0, 1]}
          highlightColor={theme.colors.danger}
          style={{ fontSize: 100, justifyContent: "center", textAlign: "center" }}
        />
        <WordReveal
          text="= a missed job."
          delay={28}
          per={3}
          style={{ fontSize: 46, fontWeight: 600, color: theme.colors.textDim, justifyContent: "center" }}
        />
      </div>
    </AbsoluteFill>
  );
};
