import type { SpringOptions } from 'motion/react';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  /** 卡片容器的高度 */
  containerHeight?: React.CSSProperties['height'];
  /** 卡片容器的寬度 */
  containerWidth?: React.CSSProperties['width'];
  /** 圖片的高度 */
  imageHeight?: React.CSSProperties['height'];
  /** 圖片的寬度 */
  imageWidth?: React.CSSProperties['width'];
  /** 懸停時的縮放比例，預設為 1.1 */
  scaleOnHover?: number;
  /** 傾斜的幅度，數字越大傾斜越明顯，預設為 14 */
  rotateAmplitude?: number;
  /** 覆蓋在圖片上的內容 */
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  /** 點擊回呼函數 */
  onClick?: () => void;
}

/** 彈簧動畫配置：調整這些值可以改變傾斜與恢復時的「手感」 */
const springValues: SpringOptions = {
  /** 阻尼感：數值越大，晃動越快停止 (預設 30) */
  damping: 30,
  /** 剛性/彈性：數值越大，反應越靈敏 (預設 100) */
  stiffness: 100,
  /** 質量：數值越大，感覺越沈重 (預設 2) */
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  overlayContent = null,
  displayOverlayContent = false,
  onClick
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      /** perspective-midrange: 設定 3D 透視距離，數值越小 3D 感越強 */
      className="relative w-full h-full perspective-midrange flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.div
        className="relative transform-3d"
        style={{
          width: imageWidth,
          height: imageHeight,
          /** 旋轉與縮放：由 handleMouse 動態計算的值 */
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover pixel-card will-change-transform transform-[translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-2 will-change-transform transform-[translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
    </figure>
  );
}
