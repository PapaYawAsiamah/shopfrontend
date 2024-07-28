import { Toaster } from "sonner";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >
      <div>
        <Toaster/>
        {children}
      </div>
    </section>
  );
}
