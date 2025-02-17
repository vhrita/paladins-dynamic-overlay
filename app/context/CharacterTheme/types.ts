export interface CharacterTheme {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    image: {
      name: string;
      x: number;
      y: number;
      left?: boolean;
      mirror?: boolean;
      customHeight?: number;
    };
}

export interface CharacterThemeContextProps {
    theme: CharacterTheme;
    setCharacter: (name: string) => void;
}
  