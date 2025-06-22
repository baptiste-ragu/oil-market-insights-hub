
import React from 'react';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  children, 
  className,
  height = "400px" 
}) => {
  return (
    <div className={cn(
      "chart-container w-full relative my-5 overflow-hidden",
      className
    )} style={{ height }}>
      <div className="chart-wrapper relative h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
