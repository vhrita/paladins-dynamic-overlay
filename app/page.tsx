'use client';

import { useCharacterTheme } from "@/context/CharacterTheme/hooks";
import { characterThemes } from "@/context/CharacterTheme/data";
import WebcamOverlay from "@/components/WebcamOverlay.tsx";

export default function Home() {
  const { setCharacter } = useCharacterTheme();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 rounded">
        <label htmlFor="character-select" className="text-white mr-2">Escolha um personagem:</label>
        <select
          id="character-select"
          className="p-2 rounded bg-gray-700 text-white"
          onChange={(e) => setCharacter(e.target.value)}
          defaultValue="Androxus"
        >
          {Object.keys(characterThemes).map((character) => (
            <option key={character} value={character}>
              {characterThemes[character].name}
            </option>
          ))}
        </select>
      </div>
      <WebcamOverlay />
    </div>
  );
}