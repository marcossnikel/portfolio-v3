import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-2xl px-6">
        <Separator />
        <p className="py-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Marcos Nikel
        </p>
      </div>
    </footer>
  );
}
