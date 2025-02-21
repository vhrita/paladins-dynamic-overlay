import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { ComponentWithModeProps } from './types';

export const componentMap: Record<string, ComponentType<ComponentWithModeProps>> = {
  webcam: dynamic(() => import('@/components/WebcamOverlay.tsx')),
};
