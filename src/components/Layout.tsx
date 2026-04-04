import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, ArrowUp, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { navLinks } from '@/data/content'
import { cn } from '@/lib/utils'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b shadow-sm py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                'font-serif text-2xl font-bold tracking-tight transition-colors',
                isScrolled ? 'text-primary' : 'text-primary lg:text-white',
              )}
            >
              Bumachar<span className="text-gold">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full',
                  location.pathname === link.path
                    ? 'text-gold after:w-full'
                    : isScrolled
                      ? 'text-foreground/80'
                      : 'text-white/90',
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-gold hover:bg-gold-dark text-white rounded-none px-6">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(isScrolled ? 'text-primary' : 'text-primary')}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas páginas do site
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'text-lg font-serif font-medium transition-colors',
                        location.pathname === link.path
                          ? 'text-gold'
                          : 'text-foreground hover:text-gold',
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="bg-gold hover:bg-gold-dark text-white rounded-none mt-4 w-full"
                  >
                    <Link to="/contato">Fale Conosco</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-charcoal text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-serif text-3xl font-bold mb-6 block">
                Bumachar<span className="text-gold">.</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Excelência, ética e dedicação na busca das melhores soluções jurídicas para nossos
                clientes. Uma trajetória construída com confiança.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6 text-gold">Links Rápidos</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6 text-gold">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 text-gold shrink-0" />
                  <span>
                    Av. Paulista, 1000 - Conjunto 123
                    <br />
                    Bela Vista, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <span>(11) 3000-0000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span>contato@bumachar.adv.br</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Bumachar Advogados. Todos os direitos reservados.
            </p>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              Desenvolvido com <span className="font-semibold text-gray-300">Skip</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 p-3 bg-gold text-white rounded-full shadow-lg transition-all duration-300 hover:bg-gold-dark hover:scale-110 z-50',
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none',
        )}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}
