import type { NavItem } from '~/types';

export const primaryNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca de', href: '/about/', anchor: '#about' },
  { label: 'Servicios', href: '/services/', anchor: '#services' },
  {
    label: 'Herramientas',
    href: '/herramientas/',
    children: [
      { label: 'Tiempo', href: '/herramientas/tiempo/', target: '_blank' },
    ],
  },
  { label: 'Testimonios', href: '/about/#testimonials' },
  { label: 'Blog', href: '/journal/', anchor: '#journal' },
  { label: 'Contacto', href: '/contact/' },
];

export const mobileExtraNav: NavItem[] = [
  { label: 'Herramientas', href: '/herramientas/tiempo/', target: '_blank' },
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
