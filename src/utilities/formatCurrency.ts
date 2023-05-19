// this func formats the currentcy adding £, $, . etc

// 1st arg locales is set to undefined cuz i want the number to be printed out based on where the user lives,
// 2ns arg is list -> i want the currency to be GPD pounds 
  // & the style to be currency so has the symbols like £ .
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
})

// formatCurrency takes in a number type into its num var
export function formatCurrency(num:number){
  return CURRENCY_FORMATTER.format(num)
}