import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { PhoneRings } from "../components/PhoneRings";
import { WordReveal } from "../components/WordReveal";

export const Agitate: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const exitO = interpolate(frame, [durationInFrames - 12, durationInFrames - 2], [1, 0], {
    easing: theme.ease.in,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringDecay = interpolate(frame, [0, durationInFrames - 20], [1, 0.12], {
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
      }}
    >
      <div style={{ opacity: ringDecay, transform: `scale(${0.85 + ringDecay * 0.15})` }}>
        <PhoneRings color={theme.colors.danger} maxR={170} period={46} ringCount={3} dotPulse={false} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          padding: "0 90px",
        }}
      >
        <WordReveal
          text="Voicemail doesn't win the job."
          delay={4}
          per={3}
          style={{ fontSize: 66, justifyContent: "center", textAlign: "center" }}
        />
        <WordReveal
          text="They call the next name on Google."
          delay={48}
          per={3}
          highlight={[2, 3]}
          highlightColor={theme.colors.danger}
          style={{ fontSize: 40, fontWeight: 600, color: theme.colors.textDim, justifyContent: "center", textAlign: "center" }}
        />
      </div>
    </AbsoluteFill>
  );
};
