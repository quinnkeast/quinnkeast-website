export default function PageHeader({ children }) {
  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-2 md:col-start-2">{children}</div>
    </div>
  );
}
