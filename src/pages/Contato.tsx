import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent } from '@/components/ui/card'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'O nome deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Insira um e-mail válido.',
  }),
  subject: z.string().min(5, {
    message: 'O assunto deve ter pelo menos 5 caracteres.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
})

const Contato = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Nossa equipe retornará o contato o mais breve possível.',
    })
    form.reset()
  }

  return (
    <div className="pt-24 pb-20 bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Fale Conosco
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Estamos prontos para entender sua necessidade e propor as melhores estratégias
            jurídicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Column */}
          <Card className="rounded-none border-0 shadow-elegant bg-white p-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Envie sua mensagem
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="rounded-none focus-visible:ring-gold py-6 bg-secondary/30"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">E-mail</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="seu@email.com"
                              {...field}
                              className="rounded-none focus-visible:ring-gold py-6 bg-secondary/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Assunto</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Qual o motivo do contato?"
                              {...field}
                              className="rounded-none focus-visible:ring-gold py-6 bg-secondary/30"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-medium">Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva brevemente sua necessidade..."
                            className="resize-none rounded-none focus-visible:ring-gold min-h-[150px] bg-secondary/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-primary hover:bg-charcoal-light text-white rounded-none px-10 py-6 text-base"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Info Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-charcoal text-white p-8 md:p-10 shadow-elegant">
              <h3 className="text-2xl font-serif font-bold mb-8 text-gold">
                Informações de Contato
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Nosso Endereço</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Av. Paulista, 1000 - Conjunto 123
                      <br />
                      Bela Vista, São Paulo - SP
                      <br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Telefone</h4>
                    <p className="text-gray-300">+55 (11) 3000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">E-mail</h4>
                    <p className="text-gray-300">contato@bumachar.adv.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-300">
                      Segunda a Sexta
                      <br />
                      09:00 às 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-[300px] bg-secondary relative overflow-hidden group">
              <img
                src="https://img.usecurling.com/p/800/600?q=map%20location"
                alt="Localização no Mapa"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
