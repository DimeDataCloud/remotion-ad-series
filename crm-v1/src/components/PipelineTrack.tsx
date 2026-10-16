import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";

const STAGES = ["New", "Contacted", "Booked"];
const TRACK_WIDTH = 640;

export const PipelineTrack: React.FC<{ delay?: number; travelFrames?: number }> = ({
  delay = 0,
  travelFrames = 70,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const wrap = spring({ frame: frame - delay, fps, config: theme.spring.smooth });
  const progress = interpolate(frame, [delay + 6, delay + 6 + travelFrames], [0, 1], {
    easing: theme.ease.inOut,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity: wrap,
        transform: `translateY(${interpolate(wrap, [0, 1], [30, 0])}px)`,
        width: TRACK_WIDTH,
        position: "relative",
        height: 90,
        fontFamily: manrope,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          right: 10,
          height: 3,
          background: "rgba(247,245,242,0.12)",
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: Math.max(0, progress * (TRACK_WIDTH - 20)),
          height: 3,
          background: theme.colors.primary,
          borderRadius: 2,
          boxShadow: `0 0 12px ${theme.colors.glow}`,
        }}
      />
      {STAGES.map((label, i) => {
        const pos = i / (STAGES.length - 1);
        const lit = progress >= pos - 0.02;
        return (
          <div
            key={label}
            style={{
              position: "absolute",
              top: 0,
              left: `${pos * 100}%`,
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: lit ? theme.colors.primary : theme.colors.surface,
                border: `2px solid ${lit ? theme.colors.primary : "rgba(247,245,242,0.25)"}`,
                boxShadow: lit ? `0 0 20px ${theme.colors.glow}` : undefined,
              }}
            />
            <div style={{ fontSize: 22, fontWeight: 700, color: lit ? theme.colors.text : theme.colors.textDim }}>
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
