import { ReactNode } from "react";

interface LinkProps {
  href: string | undefined
  children: ReactNode
  target: "_self" | "blank"
}

export function Link(props: LinkProps) {
  return (
    <a
      target={props.target}
      href={props.href}
      className="group flex items-center gap-2 text-blue font-bold text-xs hover:border-blue border-b-2 border-transparent max-md:text-[0.625rem] max-sm:text-[0.5rem]"
    >
      {props.children}
    </a>
  );
}
