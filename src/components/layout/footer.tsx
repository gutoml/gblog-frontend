import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "../brand/logo";

export function Footer() {
  return (
    <footer className="bg-secondary-foreground text-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo + Slogan */}
          <div className="flex flex-col items-start gap-6">
            <div className="relative h-16 w-40">
              <Logo inverse />
            </div>
            <p className="text-sm text-secondary">
              Conteúdo que inspira e informa
            </p>

            {/* Botão de Newsletter */}
            <Button variant="secondary">Assine nossa newsletter</Button>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-secondary">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-white hover:underline"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white hover:underline"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-white hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="hover:text-white hover:underline"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categorias</h3>
            <div className="flex flex-wrap gap-2">
              {["Política", "Tecnologia", "Cultura", "Economia"].map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="border-neutral-700 text-neutral-300 dark:text-neutral-600 hover:bg-neutral-800"
                >
                  <Link href={`/categorias/${cat.toLowerCase()}`}>{cat}</Link>
                </Badge>
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Conecte-se</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-secondary hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-secondary hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-secondary hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-secondary hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>
            © {new Date().getFullYear()} G-Blog. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            <span className="mr-1">Desenvolvido por</span>
            <a
              href="https://github.com/gutoml"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Guto Leal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
