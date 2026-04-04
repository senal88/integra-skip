import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { practiceAreasData } from '@/data/content'
import { StatsSection } from '@/components/home/StatsSection'
import { useToast } from '@/hooks/use-toast'

const Index = () => {
  const { toast } = useToast()
  const topAreas = practiceAreasData.slice(0, 4)

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inscrição realizada!',
      description: 'Você passará a receber nossas atualizações jurídicas.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.usecurling.com/p/1920/1080?q=lawyer%20office%20architecture"
            alt="Escritório de Advocacia"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="container mx-auto px-4 z-10 relative mt-16 text-center lg:text-left">
          <div
            className="max-w-3xl animate-fade-in-up opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="text-gold font-medium tracking-widest uppercase mb-4 block text-sm">
              Escritório de Advocacia
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Excelência e Dedicação em Soluções Jurídicas
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
              Protegendo seus interesses com autoridade, estratégia e visão de longo prazo. Um
              escritório moldado para entregar resultados excepcionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-white rounded-none px-8 py-6 text-base"
              >
                <Link to="/areas">Conheça nossas áreas</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-charcoal hover:bg-white hover:text-primary rounded-none px-8 py-6 text-base bg-white/90"
              >
                <Link to="/sobre">Nossa História</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Áreas de Atuação
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-muted-foreground">
              Nossa equipe multidisciplinar está preparada para atender demandas complexas em
              diversas ramificações do Direito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAreas.map((area, idx) => {
              const Icon = area.icon
              return (
                <Link to="/areas" key={area.id} className="group h-full">
                  <Card className="h-full rounded-none border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 bg-white">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-none mb-4 group-hover:bg-gold transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="font-serif text-xl">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-primary hover:text-gold text-lg group">
              <Link to="/areas" className="flex items-center gap-2">
                Ver todas as áreas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            Mantenha-se Atualizado
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se em nossa newsletter para receber artigos e atualizações sobre o mundo
            jurídico.
          </p>
          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="rounded-none border-gray-300 focus-visible:ring-gold py-6"
            />
            <Button
              type="submit"
              className="rounded-none bg-primary hover:bg-charcoal-light py-6 px-8"
            >
              Inscrever
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Index
