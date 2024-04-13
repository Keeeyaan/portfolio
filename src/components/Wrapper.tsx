import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

const Wrapper = ({
  className,
  norMargin,
  children,
}: {
  className?: string;
  norMargin?: boolean;
  children?: ReactNode;
}) => {
  return (
    <main className={cn(`max-w-7xl  w-full mx-auto`, className)}>
      {children}
    </main>
  );
};

export default Wrapper;
