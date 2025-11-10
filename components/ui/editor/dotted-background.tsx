export function DottedBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="size-full">
      <div className="size-full bg-[radial-gradient(rgb(20,20,20)_1px,transparent_1px)] [background-size:24px_24px]">
        {children}
      </div>
    </div>
  );
}
