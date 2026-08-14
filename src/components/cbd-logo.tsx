import Image from "next/image";

type CbdLogoProps = {
  variant?: "full" | "compact";
  className?: string;
  priority?: boolean;
};

export function CbdLogo({
  variant = "full",
  className = "",
  priority = false,
}: CbdLogoProps) {
  if (variant === "compact") {
    return (
      <Image
        src="/brand/cbd-logo-sm.png"
        alt="Commercial Bank of Dubai"
        width={160}
        height={35}
        className={`h-8 w-auto object-contain ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/brand/cbd-logo.svg"
      alt="Commercial Bank of Dubai"
      width={220}
      height={48}
      className={`h-10 w-auto object-contain md:h-11 ${className}`}
      priority={priority}
    />
  );
}
