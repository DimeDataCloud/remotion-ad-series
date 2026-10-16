import { Easing } from "remotion";

export const theme = {
  colors: {
    bg: "#0A0A0C",
    bgAlt: "#131316",
    surface: "#1B1B1F",
    primary: "#F0B429", // Dime Data gold — pulled from the shipped logo mark, THE hero color
    danger: "#E9483F", // problem-state indicator only, never glows, never the hero
    text: "#F7F5F2",
    textDim: "#A7A3AC",
    glow: "rgba(240, 180, 41, 0.45)",
  },
  fonts: {
    display: "Manrope",
    body: "Manrope",
  },
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1),
    inOut: Easing.bezier(0.83, 0, 0.17, 1),
    in: Easing.bezier(0.7, 0, 0.84, 0),
  },
  spring: {
    snappy: { damping: 14, stiffness: 160, mass: 0.6 },
    smooth: { damping: 20, stiffness: 90, mass: 1 },
    bouncy: { damping: 11, stiffness: 170, mass: 0.7 },
  },
} as const;
