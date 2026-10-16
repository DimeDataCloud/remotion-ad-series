import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";
import { Logo } from "../components/Logo";
import { WordReveal } from "../components/WordReveal";

const CTAPill: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: theme.spring.bouncy });
  const breathe = 1 + Math.sin((frame - delay) / 18) * 0.02;

  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px) scale(${interpolate(p, [0, 1], [0.85, 1]) * breathe})`,
        background: theme.colors.primary,
        borderRadius: 999,
        padding: "24px 52px",
        fontFamily: manrope,
        fontWeight: 800,
        fontSize: 40,
        color: "#131316",
        letterSpacing: "-0.02em",
        boxShadow: `0 0 70px ${theme.colors.glow}`,
      }}
    >
      dimedata.cloud
    </div>
  );
};

export const CTA: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 44,
        padding: "0 80px",
      }}
    >
      <Logo delay={2} width={260} />
      <WordReveal
        text="Stop losing leads."
        delay={16}
        per={4}
        highlight={[1, 2]}
        style={{ fontSize: 64, justifyContent: "center", textAlign: "center" }}
      />
      <CTAPill delay={34} />
    </AbsoluteFill>
  );
};
