export const account = {
  bankName: "Commercial Bank of Dubai",
  bankShort: "CBD",
  holder: "Prince Hamad",
  customerId: "CBD-78429103",
  product: "Current Account — USD",
  branch: "Main Branch — Dubai",
  accountNumber: "0012345678901",
  accountMasked: "••••••••8901",
  iban: "AE46 0230 0012 3456 7890 123",
  swift: "CBDUAEAD",
  currency: "USD",
  availableBalance: 20_047_862.18,
  ledgerBalance: 20_062_140.18,
  holdAmount: 14_278.0,
  status: "Active",
  openedOn: "2019-03-14",
  lastLogin: "2026-08-14T01:42:00+04:00",
};

export const relatedAccounts = [
  {
    id: "usd",
    product: "Current Account — USD",
    masked: "••••8901",
    currency: "USD",
    available: 20_047_862.18,
    primary: true,
  },
  {
    id: "aed",
    product: "Current Account — AED",
    masked: "••••4412",
    currency: "AED",
    available: 3_842_190.55,
    primary: false,
  },
  {
    id: "savings",
    product: "CBD Savings — USD",
    masked: "••••7730",
    currency: "USD",
    available: 1_285_440.9,
    primary: false,
  },
];

export type Transaction = {
  id: string;
  date: string;
  valueDate: string;
  description: string;
  counterparty: string;
  reference: string;
  channel: "SWIFT" | "CBD App" | "Branch" | "Card" | "Standing Order" | "ATM";
  type: "credit" | "debit";
  amount: number;
  balanceAfter: number;
  status: "Posted" | "Pending";
};

type TxInput = Omit<Transaction, "balanceAfter">;

const rawTransactions: TxInput[] = [
  {
    id: "TXN-260814-01942",
    date: "2026-08-13",
    valueDate: "2026-08-13",
    description: "Incoming MT103 remittance",
    counterparty: "HSBC Private Bank / Geneva",
    reference: "FT260813784291",
    channel: "SWIFT",
    type: "credit",
    amount: 1_250_000,
    status: "Posted",
  },
  {
    id: "TXN-260812-01887",
    date: "2026-08-12",
    valueDate: "2026-08-12",
    description: "Private aviation services",
    counterparty: "ExecuJet Middle East FZCO",
    reference: "TRF260812441902",
    channel: "CBD App",
    type: "debit",
    amount: 186_400,
    status: "Posted",
  },
  {
    id: "TXN-260810-01755",
    date: "2026-08-10",
    valueDate: "2026-08-10",
    description: "Dividend credit — portfolio",
    counterparty: "CBD Wealth Management",
    reference: "DIV260810009331",
    channel: "Standing Order",
    type: "credit",
    amount: 97_850.4,
    status: "Posted",
  },
  {
    id: "TXN-260808-01602",
    date: "2026-08-08",
    valueDate: "2026-08-08",
    description: "Property settlement — DIFC",
    counterparty: "Emirates NBD Escrow",
    reference: "TRF260808331004",
    channel: "SWIFT",
    type: "debit",
    amount: 425_000,
    status: "Posted",
  },
  {
    id: "TXN-260805-01544",
    date: "2026-08-05",
    valueDate: "2026-08-05",
    description: "Hotel & hospitality",
    counterparty: "Burj Al Arab Jumeirah",
    reference: "POS260805778120",
    channel: "Card",
    type: "debit",
    amount: 18_760.45,
    status: "Posted",
  },
  {
    id: "TXN-260803-01491",
    date: "2026-08-03",
    valueDate: "2026-08-03",
    description: "Salary / retainer credit",
    counterparty: "Al Hamad Holdings LLC",
    reference: "SAL260803100221",
    channel: "SWIFT",
    type: "credit",
    amount: 185_000,
    status: "Posted",
  },
  {
    id: "TXN-260801-01410",
    date: "2026-08-01",
    valueDate: "2026-08-01",
    description: "CBD Infinite Card repayment",
    counterparty: "Commercial Bank of Dubai",
    reference: "CCP260801552018",
    channel: "CBD App",
    type: "debit",
    amount: 42_318.9,
    status: "Posted",
  },
  {
    id: "TXN-260728-01366",
    date: "2026-07-28",
    valueDate: "2026-07-28",
    description: "FX deal settlement USD/AED",
    counterparty: "CBD Treasury Desk",
    reference: "FXS260728884001",
    channel: "Branch",
    type: "debit",
    amount: 75_000,
    status: "Posted",
  },
  {
    id: "TXN-260725-01298",
    date: "2026-07-25",
    valueDate: "2026-07-25",
    description: "Yacht marina berthing — Q3",
    counterparty: "Dubai Harbour Marina",
    reference: "TRF260725229841",
    channel: "CBD App",
    type: "debit",
    amount: 64_500,
    status: "Posted",
  },
  {
    id: "TXN-260722-01241",
    date: "2026-07-22",
    valueDate: "2026-07-22",
    description: "Incoming client transfer",
    counterparty: "Standard Chartered Bank / London",
    reference: "FT260722667710",
    channel: "SWIFT",
    type: "credit",
    amount: 820_000,
    status: "Posted",
  },
  {
    id: "TXN-260718-01187",
    date: "2026-07-18",
    valueDate: "2026-07-18",
    description: "Insurance premium — annual",
    counterparty: "AXA Gulf / Private Clients",
    reference: "TRF260718441220",
    channel: "Standing Order",
    type: "debit",
    amount: 128_900,
    status: "Posted",
  },
  {
    id: "TXN-260715-01102",
    date: "2026-07-15",
    valueDate: "2026-07-15",
    description: "Retail & dining — Dubai Mall",
    counterparty: "Emaar Hospitality Group",
    reference: "POS260715990334",
    channel: "Card",
    type: "debit",
    amount: 9_842.75,
    status: "Posted",
  },
  {
    id: "TXN-260710-01055",
    date: "2026-07-10",
    valueDate: "2026-07-10",
    description: "Cash withdrawal — Main Branch",
    counterparty: "CBD Main Branch Teller",
    reference: "CSH260710003891",
    channel: "Branch",
    type: "debit",
    amount: 25_000,
    status: "Posted",
  },
  {
    id: "TXN-260705-00988",
    date: "2026-07-05",
    valueDate: "2026-07-05",
    description: "Treasury bill maturity",
    counterparty: "CBD Investment Services",
    reference: "INV260705774002",
    channel: "Standing Order",
    type: "credit",
    amount: 510_000,
    status: "Posted",
  },
  {
    id: "TXN-260628-00912",
    date: "2026-06-28",
    valueDate: "2026-06-28",
    description: "Utility & estate management",
    counterparty: "DEWA Corporate Billing",
    reference: "SO260628110045",
    channel: "Standing Order",
    type: "debit",
    amount: 14_220.3,
    status: "Posted",
  },
  {
    id: "TXN-260620-00840",
    date: "2026-06-20",
    valueDate: "2026-06-20",
    description: "Inter-account transfer in",
    counterparty: "CBD AED Current ••••4412",
    reference: "IAT260620558901",
    channel: "CBD App",
    type: "credit",
    amount: 350_000,
    status: "Posted",
  },
  {
    id: "TXN-260612-00771",
    date: "2026-06-12",
    valueDate: "2026-06-12",
    description: "Legal retainer — quarterly",
    counterparty: "Al Tamimi & Company",
    reference: "TRF260612229100",
    channel: "SWIFT",
    type: "debit",
    amount: 95_000,
    status: "Posted",
  },
  {
    id: "TXN-260601-00690",
    date: "2026-06-01",
    valueDate: "2026-06-01",
    description: "ATM cash — DIFC",
    counterparty: "CBD ATM 1042",
    reference: "ATM260601884421",
    channel: "ATM",
    type: "debit",
    amount: 2_000,
    status: "Posted",
  },
];

function withRunningBalances(items: TxInput[], endingBalance: number): Transaction[] {
  let running = endingBalance;
  return items.map((tx) => {
    const row = { ...tx, balanceAfter: Number(running.toFixed(2)) };
    running = tx.type === "credit" ? running - tx.amount : running + tx.amount;
    return row;
  });
}

export const transactions = withRunningBalances(
  rawTransactions,
  account.availableBalance,
);

export const beneficiaries = [
  {
    name: "Al Hamad Holdings LLC",
    bank: "Emirates NBD",
    iban: "AE12 0336 0000 1234 5678 901",
  },
  {
    name: "ExecuJet Middle East FZCO",
    bank: "Mashreq",
    iban: "AE33 0233 0000 9988 7766 554",
  },
  {
    name: "HSBC Private Bank Geneva",
    bank: "HSBC / SWIFT",
    iban: "CH93 0076 2011 6238 5295 7",
  },
];

export const bills = [
  { payee: "DEWA", category: "Utilities", amount: 4_812.35, due: "2026-08-22" },
  { payee: "Etisalat", category: "Telecom", amount: 1_240.0, due: "2026-08-18" },
  { payee: "Salik", category: "Transport", amount: 320.5, due: "2026-08-16" },
  {
    payee: "Dubai Municipality",
    category: "Government",
    amount: 2_150.0,
    due: "2026-08-28",
  },
];

export const cards = [
  {
    name: "CBD Infinite Visa",
    type: "Credit",
    last4: "4821",
    holder: "Prince Hamad",
    expiry: "09/28",
    limit: 250_000,
    available: 207_681.1,
    status: "Active",
  },
  {
    name: "CBD Debit Mastercard",
    type: "Debit",
    last4: "8901",
    holder: "Prince Hamad",
    expiry: "03/29",
    limit: null,
    available: 20_047_862.18,
    status: "Active",
  },
];

export const statements = [
  { period: "July 2026", issued: "2026-08-01", ref: "STMT-USD-2026-07" },
  { period: "June 2026", issued: "2026-07-01", ref: "STMT-USD-2026-06" },
  { period: "May 2026", issued: "2026-06-01", ref: "STMT-USD-2026-05" },
  { period: "April 2026", issued: "2026-05-01", ref: "STMT-USD-2026-04" },
  { period: "March 2026", issued: "2026-04-01", ref: "STMT-USD-2026-03" },
  { period: "February 2026", issued: "2026-03-01", ref: "STMT-USD-2026-02" },
];

export function formatMoney(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatMoneyParts(amount: number, currency = "USD") {
  const formatted = formatMoney(amount, currency);
  const match = formatted.match(/^(.*?)([\d,]+)(\.\d{2})$/);
  if (!match) {
    return { prefix: "", whole: formatted, cents: "" };
  }
  return { prefix: match[1], whole: match[2], cents: match[3] };
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDateTime(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai",
  }).format(new Date(iso));
}
