import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import {
  Archive,
  DatabaseIcon,
  Factory,
  Home,
  Package,
  PanelBottom,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { ModeToggle } from "../mode-toggle";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <ModeToggle enableDirectToggle />

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/inicio"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dados"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <DatabaseIcon className="h-5 w-5" />
                  <span className="sr-only">Dados</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Dados</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/sistema"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Factory className="h-5 w-5" />
                  <span className="sr-only">Sistema</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Sistema</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/tipos"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Archive className="h-5 w-5" />
                  <span className="sr-only">Tipos de Peças</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Tipos de Peças</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <VisuallyHidden>
              <SheetTitle className="sr-only"></SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm-hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir / Fechar Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium m-3">
                <ModeToggle enableDirectToggle />

                <Link
                  href="/inicio"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>

                <Link
                  href="/dados"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <DatabaseIcon className="h-5 w-5 transition-all" />
                  Dados
                </Link>

                <Link
                  href="/sistema"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Factory className="h-5 w-5 transition-all" />
                  Sistema
                </Link>

                <Link
                  href="/tipos"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Archive className="h-5 w-5 transition-all" />
                  Tipos de Peças
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
