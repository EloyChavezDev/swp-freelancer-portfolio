import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Paso 01',
    title: 'Diagnóstico',
    body: 'Analizamos tu situación financiera actual: ingresos, gastos, deudas, ahorros y metas. Identificamos áreas de oportunidad y prioridades.',
    timing: 'Sesión 1',
  },
  {
    stage: 'Paso 02',
    title: 'Planificación',
    body: 'Creamos un plan personalizado según tu estilo de vida. Definimos metas claras, presupuesto realista y estrategia para alcanzar tus objetivos.',
    timing: 'Sesión 2',
  },
  {
    stage: 'Paso 03',
    title: 'Implementación',
    body: 'Te acompaño en la aplicación del plan. Ajustamos sobre la marcha para que sea práctico, viable y sostenible.',
    timing: 'A lo largo',
  },
  {
    stage: 'Paso 04',
    title: 'Seguimiento',
    body: 'Revisamos avances, medimos resultados y ajustamos la estrategia según sea necesario para mantenerte en camino hacia tus metas.',
    timing: 'Continuo',
  },
];

export const processHeading = {
  eyebrow: 'Mi método',
  title: 'Un proceso claro para ordenar tus finanzas.',
  intro:
    'Un enfoque práctico, realista y personalizado. Sin fórmulas complicadas, con estrategias que realmente puedes aplicar a tu día a día.',
};
