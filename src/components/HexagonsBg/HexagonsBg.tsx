// ref: https://hashnode.blainegarrett.com/html-5-canvas-react-refs-and-typescript-ckf4jju8r00eypos1gyisenyf
import React, { useRef, useEffect } from 'react';
import './HexagonsBg.scss';

const HexagonsBg: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      let ctx = canvasCtxRef.current;
      ctx!.beginPath();
      ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx!.stroke();
    }
  }, []);

  return <canvas ref={canvasRef} className="hexagonsbg" />;
};

export default HexagonsBg;
