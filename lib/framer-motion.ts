"use client";

// This is a minimalist implementation with just the features we need
// It's a placeholder for framer-motion since we're avoiding adding extra dependencies

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
  style?: Record<string, any>;
}

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    className = "", 
    style = {}, 
    ...props 
  }: React.PropsWithChildren<MotionProps>) => {
    const combinedStyle = {
      ...style,
      transition: transition 
        ? `all ${transition.duration || 0.3}s ${transition.ease || 'ease-out'} ${transition.delay || 0}s` 
        : undefined,
      opacity: animate?.opacity !== undefined ? animate.opacity : style.opacity,
      transform: animate?.y !== undefined 
        ? `translateY(${animate.y}px)` 
        : style.transform,
    };

    return (
      <div className={className} style={combinedStyle} {...props}>
        {props.children}
      </div>
    );
  }
};