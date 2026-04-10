import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

/**
 * Formatea una fecha a: "15 abr 2026"
 */
export function formatDateEsShort(date: string | Date): string {
  return dayjs(date).format('DD MMM YYYY');
}