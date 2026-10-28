import type { NavItem } from '~/types';

export const primaryNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca de', href: '/about/', anchor: '#about' },
  { label: 'Servicios', href: '/services/', anchor: '#services' },
  {
    label: 'Herramientas',
    href: '/#tools',
    children: [
      { label: 'Tiempo', href: '/herramientas/tiempo/' },
      { label: '0 deudas', href: '/herramientas/cero-deudas/' },
      { label: 'Deuda vs inversión', href: '/herramientas/deuda-vs-inversion/' },
    ],
  },
  { label: 'Testimonios', href: '/about/#testimonials' },
  { label: 'Blog', href: '/journal/', anchor: '#journal' },
  { label: 'Contacto', href: '/contact/' },
];

export const mobileExtraNav: NavItem[] = [
  { label: 'Herramientas', href: '/#tools' },
  { label: 'Proceso', href: '/about/#process' },
  { label: 'Preguntas frecuentes', href: '/contact/#faq' },
];

export const footerNav = {
  explore: [
    { label: 'Acerca de', href: '/about/' },
    { label: 'Servicios', href: '/services/' },
    { label: 'Testimonios', href: '/about/#testimonials' },
    { label: 'Blog', href: '/journal/' },
    { label: 'Contacto', href: '/contact/' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacidad', href: '/privacy/' },
    { label: 'Términos', href: '/terms/' },
    { label: 'RSS', href: '/rss.xml' },
  ] satisfies NavItem[],
};
