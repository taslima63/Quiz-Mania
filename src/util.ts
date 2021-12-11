export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() * 2 - 0.5);
