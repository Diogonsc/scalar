import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href="#hero" className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src="/scalar-logo.png"
        alt="Scalar Telecom"
        width={280}
        height={112}
        priority={priority}
        className={cn("h-9 w-auto mix-blend-screen sm:h-10", imageClassName)}
      />
    </Link>
  );
}
