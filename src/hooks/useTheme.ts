import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeContext";

export default function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
