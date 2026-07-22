export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl bg-red-400 min-h-screen">
      {children}
    </div>
  );
}