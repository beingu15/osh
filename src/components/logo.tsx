
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-foreground" : "text-background";
  const subTextColor = variant === "dark" ? "text-foreground/60" : "text-background/60";

  return (
    <div className={cn("flex flex-col items-start leading-none group", className)}>
      <div className="flex items-baseline">
        <span className={cn(
          "font-headline text-2xl lg:text-3xl tracking-tighter transition-colors group-hover:text-primary",
          textColor
        )}>
          THE OSH
        </span>
        <span className="font-headline text-[8px] lg:text-[10px] uppercase tracking-[0.4em] ml-2 text-primary border-l border-primary/20 pl-2">
          Atelier
        </span>
      </div>
      <div className="flex items-center space-x-2 -mt-0.5 ml-1">
        <div className="h-[1px] w-4 bg-primary/30"></div>
        <span className={cn(
          "font-body italic text-xs lg:text-sm",
          subTextColor
        )}>
          by Tinu
        </span>
      </div>
    </div>
  );
}
