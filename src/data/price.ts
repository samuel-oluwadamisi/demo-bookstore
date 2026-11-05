// "₦7,500" -> 7500
export function priceToNumber(price: string) {
  return Number(price.replace(/[^\d]/g, ""));
}

// 7500 -> "₦7,500"
export function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-US")}`;
}