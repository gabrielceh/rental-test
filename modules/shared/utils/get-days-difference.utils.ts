import dayjs from 'dayjs';

/**
 * Calcula la diferencia en días entre dos fechas.
 *
 * @param startDate - Fecha inicial (ISO string, Date o formato válido de Dayjs)
 * @param endDate - Fecha final (ISO string, Date o formato válido de Dayjs)
 * @returns Número de días de diferencia entre ambas fechas
 *
 * @throws Error si la fecha inicial es posterior a la fecha final
 */
export function getDaysDifference(startDate: string | Date, endDate: string | Date): number {
  const start = dayjs(startDate).startOf('day');
  const end = dayjs(endDate).startOf('day');

  if (!start.isValid() || !end.isValid()) {
    throw new Error('Una o ambas fechas no son válidas');
  }

  if (start.isAfter(end)) {
    throw new Error('La fecha inicial no puede ser posterior a la fecha final');
  }

  return end.diff(start, 'day');
}