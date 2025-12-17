export default function PostSection({ children, minimal, wide }) {
  const maxWidth = wide ? "max-w-3xl" : "max-w-lg";

  if (minimal) {
    return (
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2 md:col-start-2 md:max-w-lg">{children}</div>
      </div>
    );
  }

  return <div className={`${maxWidth} mx-auto`}>{children}</div>;
}
