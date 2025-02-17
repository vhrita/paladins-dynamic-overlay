"use client";

import { createContext, useState, useMemo, useCallback } from "react";
import { CharacterThemeContextProps } from "./types";
import { characterThemes } from "./data";

const CharacterThemeContext = createContext<CharacterThemeContextProps | undefined>(undefined);

export const CharacterThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characterName, setCharacterName] = useState<string>("androxus");

  const setCharacter = useCallback((name: string) => {
    setCharacterName(name.toLowerCase());
  }, []);

  const theme = useMemo(() => characterThemes[characterName] || characterThemes["androxus"], [characterName]);

  return (
    <CharacterThemeContext.Provider value={{ theme, setCharacter }}>
      {children}
    </CharacterThemeContext.Provider>
  );
};

export default CharacterThemeContext;
