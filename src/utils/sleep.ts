export const sleep = (sleepFor: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), sleepFor)
  })
}
