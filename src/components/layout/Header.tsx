import { Link, useRouter } from "@tanstack/react-router";

export default function Header() {
  const router = useRouter();

  // Determinar la ruta activa
  const isActive = (path: string) => {
    return router.state.location.pathname.startsWith(path);
  };

  return (
    <header className="py-4 border-b">
      Buenas
    </header>
  );
}
