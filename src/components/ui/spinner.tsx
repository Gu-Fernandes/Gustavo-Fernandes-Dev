import React from "react";

import { cn } from "@/lib/utils";

const Spinner = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-block h-6 w-6 animate-spin overflow-hidden rounded-full border-4 border-solid border-zinc-200 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        className
      )}
      {...props}
    />
  );
});

Spinner.displayName = "Spinner";

export { Spinner };
