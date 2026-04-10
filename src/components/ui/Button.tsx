import clsx from "clsx";

const base =
  "inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base gap-2 select-none";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:brightness-110 hover:scale-105",
  secondary:
    "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-105",
};

type SharedProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

type AnchorButtonProps = SharedProps & {
  as: "a";
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeButtonProps = SharedProps & {
  as?: "button";
  href?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;

  if (props.as === "a") {
    const restAnchorProps = { ...props };
    delete (restAnchorProps as { as?: string }).as;
    const { href, ...anchorProps } = restAnchorProps;

    return (
      <a
        href={href}
        className={clsx(base, variants[variant], className)}
        style={variant === "primary" ? { color: "#fff" } : undefined}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete (buttonProps as { as?: string }).as;

  return (
    <button
      className={clsx(base, variants[variant], className)}
      style={variant === "primary" ? { color: "#fff" } : undefined}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
