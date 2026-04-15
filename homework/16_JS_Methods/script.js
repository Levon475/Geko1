const transactions = [
    { id: "T001", info: "   apple.com/bill   ", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T002", info: "Sberbank Transfer", amount: "5000.00 RUB", date: "2023-10-01" },
    { id: "T003", info: "APPLE.COM/BILL", amount: "1200.50 USD", date: "2023-10-01" },
    { id: "T004", info: " Netflix Subscription ", amount: "15.99 USD", date: "2023-10-02" },
    { id: "T005", info: "Amazon Web Services", amount: "450.00 USD", date: "2023-10-03" },
    { id: "T006", info: "Apple.com/bill", amount: "30.00 USD", date: "2023-10-04" }
];

// ՔԱՅԼ 1: Մաքրում և Փոխարկում (Map)
const cleaned = transactions.map(t => {
    const [valStr, currStr] = t.amount.split(" ");
    let val = parseFloat(valStr);
    let curr = currStr;

    if (curr === "RUB") {
        val = val / 90;
        curr = "USD";
    }

    return {
        ...t,
        info: t.info.toLowerCase().trim(),
        amount: { value: Number(val.toFixed(2)), currency: curr }
    };
});

// ՔԱՅԼ 2: Դեդուպլիկացիա (Filter)
const unique = cleaned.filter((item, index) => {
    return index === cleaned.findIndex(t => 
        t.info === item.info && t.amount.value === item.amount.value && t.date === item.date
    );
});

// ՔԱՅԼ 3: Խմբավորում ըստ info-ի (Reduce - Օբյեկտ ստանալու համար)
const groupedByInfo = unique.reduce((acc, t) => {
    const name = t.info;
    if (!acc[name]) {
        acc[name] = []; // Եթե այս անունով զանգված չկա, ստեղծում ենք
    }
    acc[name].push(t); // Ավելացնում ենք տրանզակցիան զանգվածի մեջ
    return acc;
}, {});

// ՔԱՅԼ 4: Ընդհանուր գումարի հաշվարկ (Reduce - Թիվ ստանալու համար)
const totalExpenses = unique.reduce((sum, t) => sum + t.amount.value, 0);

// ԱՐԴՅՈՒՆՔՆԵՐԻ ՏՊՈՒՄ
console.log("1. Խմբավորված տրանզակցիաներ:");
console.log(groupedByInfo);

console.log("\n2. Վերջնական հաշվարկ:");
console.log(`Ընդհանուր ծախսը: ${totalExpenses.toFixed(2)} USD`);