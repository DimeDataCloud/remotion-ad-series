import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";
import { manrope } from "../fonts";

export const WordReveal: React.FC<{
  text: string;
  delay?: number;
  per?: number;
  highlight?: number[];
  highlightColor?: string;
  style?: React.CSSProperties;
}> = ({ text, delay = 0, per = 3, highlight = [], highlightColor = theme.colors.primary, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        fontFamily: manrope,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        color: theme.colors.text,
        ...style,
      }}
    >
      {text.split(" ").map((word, i) => {
        const p = spring({ frame: frame - delay - i * per, fps, config: theme.spring.snappy });
        const isHot = highlight.includes(i);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: p,
              transform: `translateY(${interpolate(p, [0, 1], [30, 0])}px) scale(${interpolate(p, [0, 1], [0.92, 1])})`,
              color: isHot ? highlightColor : undefined,
              textShadow: isHot ? `0 0 46px ${highlightColor}77` : undefined,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
