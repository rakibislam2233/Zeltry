"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "defaultValue" | "onChange"> {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, defaultValue = [0], onValueChange, min = 0, max = 100, step = 1, disabled, ...props }, ref) => {
    const currentValue = value?.[0] ?? defaultValue[0] ?? 0;
    const percentage = ((currentValue - Number(min)) / (Number(max) - Number(min))) * 100;

    return (
      <div className={cn("relative flex w-full items-center py-2", className)}>
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#e8edf2]">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
          />
        </div>

        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value?.[0]}
          defaultValue={defaultValue[0]}
          disabled={disabled}
          onChange={(event) => onValueChange?.([Number(event.target.value)])}
          className={cn(
            "absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent outline-none",
            "[&::-webkit-slider-thumb]:appearance-none",
            "[&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4",
            "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2",
            "[&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:bg-white",
            "[&::-webkit-slider-thumb]:shadow-sm",
            "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4",
            "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2",
            "[&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:bg-white",
            "[&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:appearance-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Slider.displayName = "Slider";

export { Slider };
