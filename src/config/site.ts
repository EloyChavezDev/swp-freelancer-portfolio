import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  CONFIGURACIÓN DEL SITIO
 * ============================================================
 */
export const siteConfig: SiteConfig = {
  name: 'Consultor Financiero',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Consultor Financiero',
  role: 'Asesoría financiera personal y empresarial',
  title: 'Consultor Financiero — Ordena tus finanzas personales',
  description:
    'Consultor financiero que te ayuda a poner en orden tus finanzas personales a través de talleres y asesorías personalizadas. Estrategias creadas según tu estilo de vida para lograr tus metas de gastos, salir de deudas o ahorrar para lograr tus sueños.',
  url: import.meta.env.SITE ?? 'https://consultor-financiero.vercel.app',
  ogImage: '/og-default.png',
  locale: 'es',
  themeColor: '#c8f14d',

  contact: {
    email: 'contacto@consultorfinanciero.com',
    phone: '+1 (000) 555-0100',
    phoneHref: '+10005550100',
    location: 'Remoto — Asesorías en línea y presenciales',
    availability: 'Agenda abierta para nuevos clientes',
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  ],

  about:
    'Consultor financiero que te ayuda a poner en orden tus finanzas personales a través de talleres y asesorías personalizadas. Mis asesorías son estrategias creadas según tu estilo de vida, para lograr tus metas de gastos, salir de deudas o ahorrar para lograr tus sueños.',

  copyrightHolder: 'Consultor Financiero',
};

export default siteConfig;
