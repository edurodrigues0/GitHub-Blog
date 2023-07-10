export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  if (diffInSeconds < 60) {
    return 'Há menos de um minuto';
  }

  const intervals: Record<string, number> = {
    ano: 31536000,
    mês: 2592000,
    semana: 604800,
    dia: 86400,
    hora: 3600,
    minuto: 60
  };

  for (const interval in intervals) {
    const value = Math.floor(diffInSeconds / intervals[interval]);

    if (value > 0) {
      return `Há ${value} ${interval}${value > 1 ? 's' : ''}`;
    }
  }

  return 'Há algum tempo';
}
