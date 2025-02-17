import { useContext } from "react";
import CharacterThemeContext from "./index";
import { CharacterThemeContextProps } from "./types";

export const useCharacterTheme = (): CharacterThemeContextProps => {
  const context = useContext(CharacterThemeContext);
  if (!context) {
    throw new Error("useCharacterTheme must be used within a CharacterThemeProvider");
  }
  return context;
};