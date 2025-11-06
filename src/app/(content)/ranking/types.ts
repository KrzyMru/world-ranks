interface CountryDataRanking {
    cca3: string,
    name: {
        common: string,
        official: string,
    },
    region: Region,
    subregion: string,
    population: number,
    area: number,
    flags: {
        png: string,
        alt: string,
    },
    independent: boolean,
    unMember: boolean,
}

export const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'] as const;
type Region = typeof regions[number];

export type { CountryDataRanking, Region }