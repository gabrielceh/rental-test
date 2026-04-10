import dayjs from "dayjs";

/**
 * Valida si una fecha seleccionada es anterior a la fecha actual.
 *
 * @param selectedDate - Fecha a validar (string, Date o Dayjs compatible)
 * @returns boolean - true si la fecha es anterior a hoy, false en caso contrario
 */
export function isBeforeToday(selectedDate: string | Date | dayjs.Dayjs): boolean {
  const today = dayjs().startOf("day");
  const date = dayjs(selectedDate).startOf("day");

  return date.isBefore(today);
}