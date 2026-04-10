import clsx from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "w-full py-20 px-4 flex justify-center bg-white",
        className
      )}
    >
      <div className="w-full max-w-[1200px]">{children}</div>
    </section>
  );
}
