interface CountryDataInfo {
    name: {
        common: string,
        official: string,
    },
    capital: string[],
    population: number,
    subregion: string,
    area: number,
    flags: {
        png: string,
        alt: string,
    },
    languages: Record<string, string>,
    currencies: Record<string, {
        name: string,
        symbol: string,
    }>,
    continents: string[],
    borders: string[],
}

interface CountryDataBorder {
    cca3: string,
    name: {
        common: string,
        official: string,
    },
    flags: {
        png: string,
        alt: string,
    },
}

export type { CountryDataInfo, CountryDataBorder }