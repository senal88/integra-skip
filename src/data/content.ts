import {
  Scale,
  Briefcase,
  Landmark,
  Calculator,
  ShieldCheck,
  Gavel,
  Users,
  FileText,
} from 'lucide-react'

export const navLinks = [
  { name: 'Início', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Áreas de Atuação', path: '/areas' },
  { name: 'Contato', path: '/contato' },
]

export const practiceAreasData = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Assessoria completa em contratos, responsabilidade civil e litígios diversos.',
    icon: Scale,
    category: 'pf',
    details:
      'Nossa equipe de Direito Civil atua na prevenção e resolução de conflitos, abrangendo contratos, obrigações, responsabilidade civil, direitos reais e família. Buscamos soluções ágeis e seguras para resguardar o patrimônio e os direitos de nossos clientes.',
    team: ['Dr. Carlos Bumachar', 'Dra. Ana Silva'],
  },
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    description: 'Suporte jurídico estruturado para empresas, fusões e aquisições.',
    icon: Briefcase,
    category: 'pj',
    details:
      'Oferecemos consultoria completa para o ambiente corporativo. Desde a constituição de sociedades, reestruturações, fusões e aquisições (M&A), até a governança corporativa e compliance, garantindo segurança jurídica para os negócios.',
    team: ['Dr. Carlos Bumachar', 'Dr. Roberto Santos'],
  },
  {
    id: 'tributario',
    title: 'Direito Tributário',
    description: 'Planejamento e contencioso tributário para otimização de recursos.',
    icon: Calculator,
    category: 'pj',
    details:
      'Atuamos no contencioso administrativo e judicial, além de consultoria preventiva. Realizamos planejamento tributário focado na redução lícita da carga fiscal e recuperação de créditos, sempre alinhados às constantes mudanças da legislação.',
    team: ['Dra. Fernanda Costa'],
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description: 'Defesa de interesses corporativos e gestão de passivos trabalhistas.',
    icon: Users,
    category: 'pj',
    details:
      'Foco na advocacia preventiva e contenciosa para empresas. Auxiliamos na adequação às normas trabalhistas, negociações sindicais e defesa em reclamações, visando mitigar riscos e passivos.',
    team: ['Dr. Marcos Oliveira'],
  },
  {
    id: 'imobiliario',
    title: 'Direito Imobiliário',
    description: 'Segurança em transações, locações e regularização de imóveis.',
    icon: Landmark,
    category: 'pf',
    details:
      'Assessoria em compra, venda, locação, incorporações imobiliárias e condomínios. Realizamos due diligence imobiliária para garantir que suas transações ocorram sem riscos ocultos.',
    team: ['Dra. Ana Silva'],
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    description: 'Adequação à LGPD, contratos de tecnologia e crimes cibernéticos.',
    icon: ShieldCheck,
    category: 'pj',
    details:
      'Proteção de dados, adequação à Lei Geral de Proteção de Dados (LGPD), elaboração de termos de uso e políticas de privacidade. Atuamos também na esfera contenciosa envolvendo litígios digitais.',
    team: ['Dr. Roberto Santos'],
  },
]

export const teamMembers = [
  {
    name: 'Dr. Carlos Bumachar',
    role: 'Sócio Fundador',
    bio: 'Especialista em Direito Empresarial com mais de 25 anos de experiência.',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=15',
  },
  {
    name: 'Dra. Ana Silva',
    role: 'Sócia - Direito Civil',
    bio: 'Mestre em Direito Civil, atua fortemente em litígios complexos e contratos.',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=22',
  },
  {
    name: 'Dr. Roberto Santos',
    role: 'Sócio - Inovação & Digital',
    bio: 'Pioneiro em adequação LGPD e estruturação jurídica para startups.',
    image: 'https://img.usecurling.com/ppl/medium?gender=male&seed=33',
  },
  {
    name: 'Dra. Fernanda Costa',
    role: 'Sócia - Tributário',
    bio: 'Ex-auditora, traz uma visão estratégica e aprofundada para o planejamento fiscal.',
    image: 'https://img.usecurling.com/ppl/medium?gender=female&seed=44',
  },
]
