import { Link } from "@tanstack/react-router";

export default function Header() {
  const headerLinkStyle =
    "transition hover:text-blue-600 [&.active]:text-blue-600 [&.active]:font-bold";

  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Jean Marco Miranda
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={headerLinkStyle}>
            Inicio
          </Link>
          <Link to="/about" className={headerLinkStyle}>
            Sobre Mí
          </Link>
        </nav>
      </div>
    </header>
  );
}
