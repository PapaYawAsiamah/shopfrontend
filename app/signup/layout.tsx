import { Toaster } from "sonner";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <Toaster />
        {children}
      </div>
    </section>
  );
}
