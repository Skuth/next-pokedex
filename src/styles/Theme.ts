const baseColor = {
  primary: "#ff5350",
  secondary: "#1D364B",
  success: "#219653",
  danger: "#eb5757",
  warning: "#d99023",
  info: "#2bb3dc",

  white: "#ffffff",
  gray: "#aeb6be",
  gray2: "#798285",
};

const theme = {
  ...baseColor,

  textColor: "#232323",
  backgroundColor: "#ffffff",

  shimmerColor: "#e9e9e9",

  borderRadius: "0.875rem",
};

type Theme = typeof theme;

export { theme };
export type { Theme };
