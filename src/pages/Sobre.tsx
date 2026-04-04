import { teamMembers } from '@/data/content'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, ShieldAlert, Linkedin } from 'lucide-react'

const Sobre = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-charcoal text-white py-16 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sobre Nós</h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Uma história construída sobre os pilares da ética, profundo conhecimento técnico e o
            compromisso inabalável com o sucesso de nossos clientes.
          </p>
        </div>
      </div>

      {/* History / Timeline */}
      <section className="container mx-auto px-4 mb-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://img.usecurling.com/p/800/600?q=law%20books%20library&color=gray"
              alt="Nossa História"
              className="w-full h-[400px] object-cover shadow-elegant"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Nossa Trajetória</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-gold bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-[3px] md:ml-0 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pb-6 pt-1 md:pt-0 md:group-odd:text-right">
                  <div className="font-serif font-bold text-xl text-primary mb-1">1998</div>
                  <div className="text-muted-foreground">
                    Fundação do escritório por Dr. Carlos Bumachar, focando incialmente em
                    contencioso cível.
                  </div>
                </div>
              </div>
              {/* Timeline Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-gold bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-[3px] md:ml-0 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pb-6 pt-1 md:pt-0 md:group-odd:text-right">
                  <div className="font-serif font-bold text-xl text-primary mb-1">2010</div>
                  <div className="text-muted-foreground">
                    Expansão para o setor empresarial e inauguração da nova sede na Avenida
                    Paulista.
                  </div>
                </div>
              </div>
              {/* Timeline Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-gold bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow ml-[3px] md:ml-0 z-10"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pt-1 md:pt-0 md:group-odd:text-right">
                  <div className="font-serif font-bold text-xl text-gold mb-1">Hoje</div>
                  <div className="text-muted-foreground">
                    Reconhecido como um dos escritórios mais admirados, com atuação nacional e
                    multidisciplinar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-24 mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Nossa Filosofia</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="rounded-none border-none shadow-none bg-transparent text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecer soluções jurídicas seguras e inovadoras, atuando de forma ágil e parceira
                  nos negócios de nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-none bg-transparent text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Eye className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em excelência jurídica, reconhecido pela alta capacidade
                  técnica e resultados expressivos.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-none border-none shadow-none bg-transparent text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <ShieldAlert className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ética inegociável, transparência, comprometimento absoluto, inovação constante e
                  valorização humana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Nossos Sócios</h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-white shadow-sm hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white text-sm leading-relaxed mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {member.bio}
                </p>
                <a
                  href="#"
                  className="inline-flex w-fit text-white hover:text-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="p-5 bg-white group-hover:bg-primary transition-colors duration-300">
                <h3 className="font-serif font-bold text-lg text-primary group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sobre
