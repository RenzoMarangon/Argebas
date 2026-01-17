import * as Dialog from "@radix-ui/react-dialog";
import Container from "./Container";

const LINKS = [
  { href: "#index", label: "Inicio" },
  { href: "#clients", label: "Clientes" },
  { href: "#about", label: "Nosotros" },
  { href: "#faq", label: "Qué hacemos" },
  { href: "#contact", label: "Contactanos" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-md">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#index" className="text-sm font-semibold tracking-tight">
            Argebas
          </a>

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
                className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium md:hidden"
                aria-label="Abrir menú"
              >
                ☰
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              {/* Overlay */}
              <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide" />

              {/* Panel */}
              <Dialog.Content
                className="fixed left-0 top-0 h-dvh w-80 max-w-[85vw] bg-white shadow-lg outline-none will-change-transform data-[state=open]:animate-sheetInLeft data-[state=closed]:animate-sheetOutLeft"
              >
                <div className="flex h-16 items-center justify-between border-b px-5">
                  <span className="text-sm font-semibold">Argebas</span>

                  <Dialog.Close asChild>
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium"
                      aria-label="Cerrar menú"
                    >
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
                            href={l.href}
                          >
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
    </header>
  );
};
