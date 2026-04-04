import { useState } from 'react'
import { practiceAreasData } from '@/data/content'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Check } from 'lucide-react'

type FilterType = 'all' | 'pf' | 'pj'

const Areas = () => {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedArea, setSelectedArea] = useState<(typeof practiceAreasData)[0] | null>(null)

  const filteredAreas = practiceAreasData.filter((area) =>
    filter === 'all' ? true : area.category === filter,
  )

  return (
    <div className="pt-24 pb-20 min-h-screen bg-secondary/20">
      {/* Header */}
      <div className="bg-charcoal text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Áreas de Atuação</h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Especialidade e precisão técnica em cada segmento do direito para proteger seus
            interesses com excelência.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            className={cn('rounded-full px-6', filter === 'all' && 'bg-primary')}
            onClick={() => setFilter('all')}
          >
            Todas as Áreas
          </Button>
          <Button
            variant={filter === 'pj' ? 'default' : 'outline'}
            className={cn('rounded-full px-6', filter === 'pj' && 'bg-primary')}
            onClick={() => setFilter('pj')}
          >
            Pessoa Jurídica (Empresas)
          </Button>
          <Button
            variant={filter === 'pf' ? 'default' : 'outline'}
            className={cn('rounded-full px-6', filter === 'pf' && 'bg-primary')}
            onClick={() => setFilter('pf')}
          >
            Pessoa Física
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area, idx) => {
            const Icon = area.icon
            return (
              <div
                key={area.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationFillMode: 'forwards', animationDelay: `${idx * 100}ms` }}
              >
                <Card
                  className="h-full rounded-none border-border hover:border-gold/50 transition-all duration-300 hover:shadow-elegant bg-white cursor-pointer group flex flex-col"
                  onClick={() => setSelectedArea(area)}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-none mb-4 group-hover:bg-gold transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="font-serif text-2xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-base text-muted-foreground mb-6">
                      {area.description}
                    </CardDescription>
                    <div className="flex items-center text-gold font-medium text-sm group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                      Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedArea} onOpenChange={(open) => !open && setSelectedArea(null)}>
        <DialogContent className="max-w-2xl bg-white rounded-none p-0 overflow-hidden border-0">
          {selectedArea && (
            <>
              <div className="bg-charcoal p-8 text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <selectedArea.icon className="w-32 h-32" />
                </div>
                <DialogTitle className="font-serif text-3xl font-bold mb-2 relative z-10">
                  {selectedArea.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-lg relative z-10">
                  {selectedArea.description}
                </DialogDescription>
              </div>
              <div className="p-8">
                <h4 className="font-serif font-semibold text-xl mb-4 text-primary">
                  Sobre a Especialidade
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-8">{selectedArea.details}</p>

                <h4 className="font-serif font-semibold text-lg mb-4 text-primary">
                  Equipe Responsável
                </h4>
                <ul className="space-y-2">
                  {selectedArea.team.map((member, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      {member}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t flex justify-end">
                  <Button
                    onClick={() => setSelectedArea(null)}
                    className="bg-primary hover:bg-charcoal-light text-white rounded-none px-8"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Areas
