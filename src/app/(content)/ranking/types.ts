interface CountryDataRanking {
    cca3: string,
    name: {
        common: string,
        official: string,
    },
    region: string,
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


export type { CountryDataRanking }