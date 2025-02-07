
interface FormatCurrencyProps {
    amount: number;
}

export default function FormatCurrency({ amount }: FormatCurrencyProps) {
    const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);

    return formatted
}