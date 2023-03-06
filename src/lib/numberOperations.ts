export const defaultToInt = (numberStr: string, defaultValue: number) => {
   const parse = parseInt(numberStr)

   return Number.isNaN(parse) ? defaultValue : parse
}
