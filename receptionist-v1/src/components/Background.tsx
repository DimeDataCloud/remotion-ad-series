import { AbsoluteFill, useCurrentFrame } from "remotion";
import { theme } from "../theme";

export const BgMesh: React.FC = () => {
  const frame = useCurrentFrame();
  const d1 = Math.sin(frame / 55) * 60;
  const d2 = Math.cos(frame / 70) * 50;
  return (
    <AbsoluteFill style={{ background: theme.colors.bg }}>
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          top: -430,
          left: -360 + d1,
          filter: "blur(60px)",
          background: `radial-gradient(circle, ${theme.colors.primary}14, transparent 48%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          bottom: -400,
          right: -320 - d2,
          filter: "blur(70px)",
          background: `radial-gradient(circle, ${theme.colors.primary}0e, transparent 50%)`,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,245,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,242,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </AbsoluteFill>
  );
};
