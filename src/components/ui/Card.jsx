import React from "react";
import { cn } from "../lib/utils";

export const Card = React.forwardRef(function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-gray-200 dark:bg-zinc-900 shadow-lg shadow-gray-300 dark:shadow-gray-500",
          className
        )}
        {...props}
      />
    );
  });
  Card.displayName = "Card";

export const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  );
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef(function CardTitle({ children, className, ...props }, ref) {
    return (
      <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props}>
        {children}
      </h3>
    );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  );
});
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
});
CardFooter.displayName = "CardFooter";
