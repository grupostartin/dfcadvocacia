export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  keyPoints: string[];
}

export const OFFICE_DATA = {
  brand: 'DFC ADVOCACIA',
  fullName: 'DFC Advocacia & Consultoria Jurídica',
  locationKicker: 'DFC ADVOCACIA — BELO HORIZONTE / MG',
  cityState: 'Belo Horizonte — Minas Gerais',
  phoneFormatted: '(31) 98340-1438',
  phoneRaw: '5531983401438',
  address: {
    street: 'Rua Joana Angélica, 115',
    neighborhood: 'Bairro Minaslândia',
    city: 'Belo Horizonte',
    state: 'MG',
    zipCode: '31810-390',
    fullFormatted: 'R. Joana Angélica, 115 — Minaslândia, Belo Horizonte — MG, 31810-390',
  },
  coordinates: {
    degrees: "19°51'40\"S 43°56'28\"W",
    lat: -19.8611,
    lng: -43.9411,
  },
  hours: 'Segunda a Sexta, das 09h às 18h (Horário agendado)',
  instagram: 'https://www.instagram.com/dfcadvocacia/',
  instagramHandle: '@dfcadvocacia',
  googleMapsUrl: 'https://maps.google.com/?q=Rua+Joana+Ang%C3%A9lica,+115,+Minasl%C3%A2ndia,+Belo+Horizonte+-+MG,+31810-390',
  whatsappUrl: 'https://wa.me/5531983401438?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20DFC%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento.',
  getWhatsAppUrlForArea: (areaTitle: string) =>
    `https://wa.me/5531983401438?text=${encodeURIComponent(
      `Olá! Estava analisando a área de "${areaTitle}" no site da DFC Advocacia e gostaria de orientações sobre atendimento.`
    )}`,
};

export const NAV_LINKS = [
  { label: '01 O ESCRITÓRIO', href: '#escritorio' },
  { label: '02 ATUAÇÃO', href: '#atuacao' },
  { label: '03 ATENDIMENTO', href: '#atendimento' },
  { label: '04 LOCALIZAÇÃO', href: '#localizacao' },
  { label: '05 CONTATO', href: '#contato' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    number: '01 /',
    title: 'Direito Civil & Obrigações',
    summary: 'Gestão de obrigações, responsabilidade civil, indenizações, elaboração, análise e revisão criteriosa de contratos civis e comerciais.',
    description: 'Atuação integral na prevenção de conflitos e condução de litígios contratuais e patrimoniais, priorizando a segurança de direitos e a recomposição de danos.',
    keyPoints: [
      'Elaboração e revisão minuciosa de instrumentos contratuais',
      'Ações indenizatórias por perdas, danos e responsabilidade civil',
      'Cobranças e recuperação judicial e extrajudicial de créditos',
      'Resolução técnica de inadimplementos e disputas patrimoniais',
    ],
  },
  {
    id: 'familia',
    number: '02 /',
    title: 'Família e Sucessões',
    summary: 'Inventários judiciais e extrajudiciais, planejamento sucessório, divórcios, partilhas de bens e pactos antenupciais com reserva e discrição.',
    description: 'Condução serena e técnica de demandas de alta sensibilidade pessoal, preservando o patrimônio familiar e garantindo celeridade nos procedimentos.',
    keyPoints: [
      'Inventários em cartório (extrajudiciais) e processos judiciais',
      'Divórcios consensuais e litigiosos com partilha patrimonial equilibrada',
      'Planejamento sucessório e elaboração de testamentos e doações',
      'Fixação, revisão e execução de alimentos e acordos parentais',
    ],
  },
  {
    id: 'imobiliario',
    number: '03 /',
    title: 'Direito Imobiliário',
    summary: 'Assessoria jurídica na compra e venda, regularização de imóveis, usucapião, contratos de locação, condomínios e despejos.',
    description: 'Segurança preventiva e contenciosa para negócios imobiliários, garantindo higidez documental e proteção possessória para pessoas e empresas.',
    keyPoints: [
      'Due diligence para aquisições seguras e sem ônus ocultos',
      'Ações de usucapião judicial e procedimentos extrajudiciais em cartório',
      'Regularização de escrituras, registros e desmembramentos',
      'Gestão de conflitos locatícios, ações de despejo e assessoria condominial',
    ],
  },
  {
    id: 'trabalhista',
    number: '04 /',
    title: 'Direito do Trabalho & Empresarial',
    summary: 'Consultoria trabalhista preventiva para empresas, acordos judiciais, rescisões complexas e defesa dos interesses patrimoniais.',
    description: 'Assessoria jurídica voltada à mitigação de riscos legais e passivos trabalhistas, com suporte contínuo para relações laborais estruturadas.',
    keyPoints: [
      'Auditoria trabalhista preventiva e adequação de rotinas operacionais',
      'Defesa consistente em reclamações trabalhistas perante a Justiça do Trabalho',
      'Negociação de acordos judiciais e extrajudiciais estratégicos',
      'Elaboração de contratos de trabalho, confidencialidade e prestação de serviços',
    ],
  },
  {
    id: 'consumidor',
    number: '05 /',
    title: 'Direito do Consumidor & Bancário',
    summary: 'Defesa em litígios contra instituições financeiras, operadoras, concessionárias e reparação por inclusões indevidas em cadastros restritivos.',
    description: 'Combate a abusividades contratuais e falhas graves na prestação de serviços, assegurando o cumprimento dos direitos previstos no CDC.',
    keyPoints: [
      'Ações de reparação por negativação indevida (SPC, Serasa e bureaus)',
      'Contestação de fraudes eletrônicas, golpes de pix e clonagens bancárias',
      'Revisão judicial de juros extorsivos e vendas casadas em financiamentos',
      'Reparação moral e material por falhas graves de companhias aéreas e concessionárias',
    ],
  },
];
