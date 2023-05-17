export function getNextDayRange(nextDaysCount: number): {
  gte: Date;
  lte: Date;
} {
  const gte = new Date();
  gte.setHours(0, 0, 0, 0);
  const lte = new Date(gte);
  lte.setDate(lte.getDate() + nextDaysCount);
  return { gte, lte };
}
