import type { ToolkitItem } from '~/types';

export const tools: ToolkitItem[] = [
  {
    icon: 'clock',
    title: 'TimeWorth — Calculadora de Tiempo de Vida',
    detail: 'Descubre cuántas horas de trabajo te cuesta cada compra y evalúa su impacto con la regla 50/30/20.',
    href: '/herramientas/tiempo/',
  },
  {
    icon: 'trending-down',
    title: 'Cero Deudas — Estrategia Bola de Nieve',
    detail: 'Registra tus deudas y obtén un plan paso a paso para liquidarlas usando la estrategia bola de nieve o avalancha.',
    href: '/herramientas/cero-deudas/',
  },
  {
    icon: 'chart',
    title: 'Deuda vs Inversión',
    detail: 'Compara cuánto te cuesta una deuda contra lo que podrías ganar invirtiendo ese mismo dinero.',
    href: '/herramientas/deuda-vs-inversion/',
  },
  {
    icon: 'trending-up',
    title: 'Interés Compuesto — Simulador de Inversión',
    detail: 'Proyecta el crecimiento de tu inversión con interés compuesto y aportes periódicos.',
    href: '/herramientas/Interes-compuesto/',
  },
];

export const toolsHeading = {
  eyebrow: 'Herramientas Financieras',
  title: 'Herramientas para tomar mejores decisiones con tu dinero.',
  intro:
    'Calcula el costo real de tus compras en horas de trabajo o diseña un plan para salir de deudas. Haz clic en cualquier herramienta para abrirla.',
};
