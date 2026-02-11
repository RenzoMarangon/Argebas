import * as Dialog from "@radix-ui/react-dialog";
import Container from "./Container";
import { argebas } from "../Assets/images";

const LINKS = [
  { href: "#index", label: "Inicio" },
  { href: "#brands", label: "Clientes" },
  { href: "#about", label: "Nosotros" },
  { href: "#faq", label: "Qué hacemos" },
  { href: "#contact", label: "Contactanos" },
];

export const Navbar = () => {
  return (
    <nav className="text-white backdrop-blur-md shadow-sm">
      {/* bg-indigo-950/20   */}
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <h1>
          <a href="#index" className="text-sm font-semibold tracking-tight">
            <img src={argebas} alt="" className="h-5 w-auto" />
            <span className="sr-only">Argebas</span>
          </a>
        </h1>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="hover:underline underline-offset-4" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-bold md:hidden text-gray-400"
              aria-label="Abrir menú">
              ☰
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            {/* Overlay */}
            <Dialog.Overlay className="radix-overlay fixed inset-0 bg-black/40" />

            {/* Panel */}
            <Dialog.Content className="z-50 radix-sheet fixed left-0 top-0 h-dvh w-80 max-w-[85vw] bg-transparent shadow-lg text-white backdrop-blur-md outline-none will-change-transform">
              <div className="flex h-16 items-center justify-between  px-5">
                <h1>
                  <a
                    href="#index"
                    className="text-sm font-semibold tracking-tight">
                    <img src={argebas} alt="" className="h-5 w-auto" />
                    <span className="sr-only">Argebas</span>
                  </a>
                </h1>

                <Dialog.Close asChild>
                  <button
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    aria-label="Cerrar menú">
                    ✕
                  </button>
                </Dialog.Close>
              </div>

              <nav className="px-5 py-6">
                <ul className="flex flex-col gap-3 text-sm font-medium">
                  {LINKS.map((l) => (
                    <li key={l.href}>
                      <Dialog.Close asChild>
                        <a
                          className="block rounded-md px-3 py-2 hover:bg-black/5"
                          href={l.href}>
                          {l.label}
                        </a>
                      </Dialog.Close>
                    </li>
                  ))}
                </ul>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </nav>
  );
};
