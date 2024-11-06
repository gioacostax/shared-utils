import { formatDuration, intervalToDuration } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Format date difference in localized string
 * @param startDate Start date
 * @param endDate End date
 * @returns Localized string
 */
export const dateDiff = (start: Date, end: Date, locale = es) =>
  formatDuration(intervalToDuration({ end, start }), {
    delimiter: ', ',
    format: ['years', 'months'],
    locale,
  });
