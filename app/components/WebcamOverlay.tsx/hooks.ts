import { useState, useEffect } from "react";

export function useWebcamStatus() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Simulando ativação da webcam
    const timeout = setTimeout(() => setIsActive(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return isActive;
}
