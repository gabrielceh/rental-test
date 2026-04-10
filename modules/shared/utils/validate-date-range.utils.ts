import dayjs, { Dayjs } from 'dayjs';

type DateInput = string | Date | Dayjs;

interface DateValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Valida que un rango de fechas sea correcto.
 *
 * @param startDate - Fecha inicial (string, Date o Dayjs)
 * @param endDate - Fecha final (string, Date o Dayjs)
 * @returns Objeto con el estado de la validación y un mensaje de error si aplica
 *
 * @example
 * const result = validateDateRange('2024-01-01', '2024-01-10');
 * // { isValid: true, error: null }
 *
 * const result = validateDateRange('2024-01-10', '2024-01-01');
 * // { isValid: false, error: 'La fecha inicial no puede ser mayor a la fecha final' }
 */
export function validateDateRange(
  startDate: DateInput,
  endDate: DateInput
): DateValidationResult {
  const start = dayjs(startDate);
  const end = dayjs(endDate);

  // Validación de fechas inválidas
  if (!start.isValid() || !end.isValid()) {
    return {
      isValid: false,
      error: 'Una o ambas fechas no son válidas',
    };
  }

  // Validación de rango
  if (start.isAfter(end)) {
    return {
      isValid: false,
      error: 'La fecha inicial no puede ser mayor a la fecha final',
    };
  }

  return {
    isValid: true,
    error: null,
  };
}