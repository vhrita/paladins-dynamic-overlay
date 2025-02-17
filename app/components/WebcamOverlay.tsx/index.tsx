import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Image from 'next/image';
import { useCharacterTheme } from '@/context/CharacterTheme/hooks';

const WebcamOverlay: React.FC = () => {
  const { theme } = useCharacterTheme();

  // Estado para armazenar o tamanho dinâmico do overlayw
  const [boxSize, setBoxSize] = useState({ width: 500, height: 300 });

  // Definição do fator de escala baseado no tamanho da box
  const baseHeight = 300;
  const baseCharacterHeight = theme.image.customHeight || 180;
  const scaleFactor = boxSize.height / baseHeight;

  const characterHeight = baseCharacterHeight * scaleFactor;
  const scaledOffsetX = theme.image.x * scaleFactor;
  const scaledOffsetY = theme.image.y * scaleFactor;

  return (
    <div className="relative inline-block">
      {theme.image.name && (
        <Image
          src={`/characters/${theme.image.name}`}
          alt={theme.name}
          className="absolute z-10"
          width={300}
          height={300}
          style={{
            top: `${scaledOffsetY}px`,
            [theme.image.left ? 'left' : 'right']: `${scaledOffsetX}px`,
            height: `${characterHeight}px`,
            width: 'auto',
            transform: `translate(0, -100%) ${theme.image.mirror ? 'scaleX(-1)' : ''}`,
          }}
        />
      )}
      <ResizableBox
        width={boxSize.width}
        height={boxSize.height}
        minConstraints={[300, 300]}
        maxConstraints={[600, 400]}
        axis="both"
        className="relative border-4 p-2 bg-white"
        style={{ borderColor: theme.primaryColor }}
        onResize={(_e, data) => setBoxSize({ width: data.size.width, height: data.size.height })}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ borderColor: theme.primaryColor }}>
          <span className="text-white">Webcam Overlay</span>
        </div>
      </ResizableBox>
    </div>
  );
};

export default WebcamOverlay;