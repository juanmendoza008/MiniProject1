const rates = {
    "btc": {
        "name": "Bitcoin",
        "unit": "BTC",
        "value": 1,
        "type": "crypto"
    },
    "eth": {
        "name": "Ether",
        "unit": "ETH",
        "value": 42.537,
        "type": "crypto"
    },
    "ltc": {
        "name": "Litecoin",
        "unit": "LTC",
        "value": 913.78,
        "type": "crypto"
    },
    "bch": {
        "name": "Bitcoin Cash",
        "unit": "BCH",
        "value": 260.315,
        "type": "crypto"
    },
    "bnb": {
        "name": "Binance Coin",
        "unit": "BNB",
        "value": 139.346,
        "type": "crypto"
    },
    "eos": {
        "name": "EOS",
        "unit": "EOS",
        "value": 149198.135,
        "type": "crypto"
    },
    "xrp": {
        "name": "XRP",
        "unit": "XRP",
        "value": 35825.462,
        "type": "crypto"
    },
    "xlm": {
        "name": "Lumens",
        "unit": "XLM",
        "value": 296864.826,
        "type": "crypto"
    },
    "link": {
        "name": "Chainlink",
        "unit": "LINK",
        "value": 5546.073,
        "type": "crypto"
    },
    "dot": {
        "name": "Polkadot",
        "unit": "DOT",
        "value": 18491.443,
        "type": "crypto"
    },
    "yfi": {
        "name": "Yearn.finance",
        "unit": "YFI",
        "value": 16.052,
        "type": "crypto"
    },
    "usd": {
        "name": "US Dollar",
        "unit": "$",
        "value": 87971.723,
        "type": "fiat"
    },
    "aed": {
        "name": "United Arab Emirates Dirham",
        "unit": "DH",
        "value": 323120.14,
        "type": "fiat"
    },
    "ars": {
        "name": "Argentine Peso",
        "unit": "$",
        "value": 94184295.517,
        "type": "fiat"
    },
    "aud": {
        "name": "Australian Dollar",
        "unit": "A$",
        "value": 139209.006,
        "type": "fiat"
    },
    "bdt": {
        "name": "Bangladeshi Taka",
        "unit": "৳",
        "value": 10713398.659,
        "type": "fiat"
    },
    "bhd": {
        "name": "Bahraini Dinar",
        "unit": "BD",
        "value": 33161.469,
        "type": "fiat"
    },
    "bmd": {
        "name": "Bermudian Dollar",
        "unit": "$",
        "value": 87971.723,
        "type": "fiat"
    },
    "brl": {
        "name": "Brazil Real",
        "unit": "R$",
        "value": 501386.041,
        "type": "fiat"
    },
    "cad": {
        "name": "Canadian Dollar",
        "unit": "CA$",
        "value": 125385.305,
        "type": "fiat"
    },
    "chf": {
        "name": "Swiss Franc",
        "unit": "Fr.",
        "value": 77765.772,
        "type": "fiat"
    },
    "clp": {
        "name": "Chilean Peso",
        "unit": "CLP$",
        "value": 80739568.202,
        "type": "fiat"
    },
    "cny": {
        "name": "Chinese Yuan",
        "unit": "¥",
        "value": 639202.543,
        "type": "fiat"
    },
    "czk": {
        "name": "Czech Koruna",
        "unit": "Kč",
        "value": 2033121.717,
        "type": "fiat"
    },
    "dkk": {
        "name": "Danish Krone",
        "unit": "kr.",
        "value": 608340.479,
        "type": "fiat"
    },
    "eur": {
        "name": "Euro",
        "unit": "€",
        "value": 81537.559,
        "type": "fiat"
    },
    "gbp": {
        "name": "British Pound Sterling",
        "unit": "£",
        "value": 68243.8,
        "type": "fiat"
    },
    "gel": {
        "name": "Georgian Lari",
        "unit": "₾",
        "value": 243681.674,
        "type": "fiat"
    },
    "hkd": {
        "name": "Hong Kong Dollar",
        "unit": "HK$",
        "value": 684067.242,
        "type": "fiat"
    },
    "huf": {
        "name": "Hungarian Forint",
        "unit": "Ft",
        "value": 32657447.279,
        "type": "fiat"
    },
    "idr": {
        "name": "Indonesian Rupiah",
        "unit": "Rp",
        "value": 1461208964.73,
        "type": "fiat"
    },
    "ils": {
        "name": "Israeli New Shekel",
        "unit": "₪",
        "value": 322771.508,
        "type": "fiat"
    },
    "inr": {
        "name": "Indian Rupee",
        "unit": "₹",
        "value": 7536670.925,
        "type": "fiat"
    },
    "jpy": {
        "name": "Japanese Yen",
        "unit": "¥",
        "value": 13217399.584,
        "type": "fiat"
    },
    "krw": {
        "name": "South Korean Won",
        "unit": "₩",
        "value": 128872586.046,
        "type": "fiat"
    },
    "kwd": {
        "name": "Kuwaiti Dinar",
        "unit": "KD",
        "value": 27120.362,
        "type": "fiat"
    },
    "lkr": {
        "name": "Sri Lankan Rupee",
        "unit": "Rs",
        "value": 26141423.146,
        "type": "fiat"
    },
    "mmk": {
        "name": "Burmese Kyat",
        "unit": "K",
        "value": 184564676.112,
        "type": "fiat"
    },
    "mxn": {
        "name": "Mexican Peso",
        "unit": "MX$",
        "value": 1765964.173,
        "type": "fiat"
    },
    "myr": {
        "name": "Malaysian Ringgit",
        "unit": "RM",
        "value": 389758.721,
        "type": "fiat"
    },
    "ngn": {
        "name": "Nigerian Naira",
        "unit": "₦",
        "value": 135136003.773,
        "type": "fiat"
    },
    "nok": {
        "name": "Norwegian Krone",
        "unit": "kr",
        "value": 925139.324,
        "type": "fiat"
    },
    "nzd": {
        "name": "New Zealand Dollar",
        "unit": "NZ$",
        "value": 152958.987,
        "type": "fiat"
    },
    "php": {
        "name": "Philippine Peso",
        "unit": "₱",
        "value": 5077024.2,
        "type": "fiat"
    },
    "pkr": {
        "name": "Pakistani Rupee",
        "unit": "₨",
        "value": 24720253.587,
        "type": "fiat"
    },
    "pln": {
        "name": "Polish Zloty",
        "unit": "zł",
        "value": 340375.882,
        "type": "fiat"
    },
    "rub": {
        "name": "Russian Ruble",
        "unit": "₽",
        "value": 7391450.459,
        "type": "fiat"
    },
    "sar": {
        "name": "Saudi Riyal",
        "unit": "SR",
        "value": 330010.965,
        "type": "fiat"
    },
    "sek": {
        "name": "Swedish Krona",
        "unit": "kr",
        "value": 885029.496,
        "type": "fiat"
    },
    "sgd": {
        "name": "Singapore Dollar",
        "unit": "S$",
        "value": 117725.431,
        "type": "fiat"
    },
    "thb": {
        "name": "Thai Baht",
        "unit": "฿",
        "value": 2986464.072,
        "type": "fiat"
    },
    "try": {
        "name": "Turkish Lira",
        "unit": "₺",
        "value": 3343734.836,
        "type": "fiat"
    },
    "twd": {
        "name": "New Taiwan Dollar",
        "unit": "NT$",
        "value": 2911810.124,
        "type": "fiat"
    },
    "uah": {
        "name": "Ukrainian hryvnia",
        "unit": "₴",
        "value": 3675272.199,
        "type": "fiat"
    },
    "vef": {
        "name": "Venezuelan bolívar fuerte",
        "unit": "Bs.F",
        "value": 8808.608,
        "type": "fiat"
    },
    "vnd": {
        "name": "Vietnamese đồng",
        "unit": "₫",
        "value": 2253747586.907,
        "type": "fiat"
    },
    "zar": {
        "name": "South African Rand",
        "unit": "R",
        "value": 1606478.564,
        "type": "fiat"
    },
    "xdr": {
        "name": "IMF Special Drawing Rights",
        "unit": "XDR",
        "value": 66489.732,
        "type": "fiat"
    },
    "xag": {
        "name": "Silver - Troy Ounce",
        "unit": "XAG",
        "value": 2604.949,
        "type": "commodity"
    },
    "xau": {
        "name": "Gold - Troy Ounce",
        "unit": "XAU",
        "value": 29.05,
        "type": "commodity"
    },
    "bits": {
        "name": "Bits",
        "unit": "μBTC",
        "value": 1000000,
        "type": "crypto"
    },
    "sats": {
        "name": "Satoshi",
        "unit": "sats",
        "value": 100000000,
        "type": "crypto"
    },
    "cop": {
        "name": "Colombian Peso",
        "unit": "$",
        "value": 361343852.223,
        "type": "fiat"
    },
    "kes": {
        "name": "Kenyan Shilling",
        "unit": "KSh",
        "value": 11383540.956,
        "type": "fiat"
    },
    "ron": {
        "name": "Romanian Leu",
        "unit": "lei",
        "value": 405743.181,
        "type": "fiat"
    },
    "dop": {
        "name": "Dominican Peso",
        "unit": "RD$",
        "value": 5569063.032,
        "type": "fiat"
    },
    "crc": {
        "name": "Costa Rican Colón",
        "unit": "₡",
        "value": 43962430.232,
        "type": "fiat"
    },
    "hnl": {
        "name": "Honduran Lempira",
        "unit": "L",
        "value": 2255417.803,
        "type": "fiat"
    },
    "zmw": {
        "name": "Zambian Kwacha",
        "unit": "ZK",
        "value": 2552446.76,
        "type": "fiat"
    },
    "svc": {
        "name": "Salvadoran Colón",
        "unit": "₡",
        "value": 771495.208,
        "type": "fiat"
    },
    "bam": {
        "name": "Bosnia and Herzegovina Convertible Mark",
        "unit": "KM",
        "value": 159401.067,
        "type": "fiat"
    },
    "pen": {
        "name": "Peruvian Sol",
        "unit": "S/",
        "value": 321670.98,
        "type": "fiat"
    },
    "gtq": {
        "name": "Guatemalan Quetzal",
        "unit": "Q",
        "value": 679479.777,
        "type": "fiat"
    },
    "lbp": {
        "name": "Lebanese Pound",
        "unit": "ل.ل",
        "value": 7878775190.863,
        "type": "fiat"
    },
    "amd": {
        "name": "Armenian Dram",
        "unit": "֏",
        "value": 34499684.373,
        "type": "fiat"
    }
}

const dictonaryOfSupportedCountries = {
    australia: "aud",
germany: "ger",
euro: "eur",
}
dictonaryOfSupportedCountries['australia']

const fromDropdownList = 'australia'

rates[dictonaryOfSupportedCountries[fromDropdownList]]?.value || 'not found'

// try this from Hazel if you want to loop through the object
// Object.values(rates).forEach(value => console.log('value', value))