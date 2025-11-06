"use client"
import styles from "./page-client.module.css";
import RankingTable from "../components/ranking-table/ranking-table";
import StatusFilter from "../components/status-filter/status-filter";
import RegionFilter from "../components/region-filter/region-filter";
import SortListbox from "../components/sort-listbox/sort-listbox";
import SearchBar from "../components/search-bar/search-bar";
import { RankingPageClientProps } from "./types";
import { useState } from "react";
import { SortType, sortTypes } from "../components/sort-listbox/types";

const RankingPageClient = (props: RankingPageClientProps) => {
    const { countries } = { ...props }
    const [filterText, setFilterText] = useState<string>("");
    const [sortType, setSortType] = useState<SortType>("population");

    const handleApplySearch = (text: string) => {
        setFilterText(text);
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <span className="text__lg--semibold">Found {countries.length} countries</span>
                <SearchBar
                    onEnterPress={handleApplySearch}
                    placeholder="Search by Name, Region..."
                />
            </header>
            <div className={styles.content}>
                <div className={styles.filters}>
                    <div className={styles.filters__content}>
                        <span className="text__sm--medium">Sort by</span>
                        <SortListbox 
                            options={sortTypes} 
                            value={sortType}
                            onChange={(val) => setSortType(val as SortType)}
                        />
                    </div>
                    <div className={styles.filters__content}>
                        <span className="text__sm--medium">Region</span>
                        <div className={styles.filters__region}>
                            <RegionFilter text='Americas' />
                            <RegionFilter text='Antarctic' />
                            <RegionFilter text='Africa' />
                            <RegionFilter text='Asia' />
                            <RegionFilter text='Europe' />
                            <RegionFilter text='Oceania' />
                        </div>
                    </div>
                    <div className={styles.filters__content}>
                        <span className="text__sm--medium">Status</span>
                        <div className={styles.filters__status}>
                            <StatusFilter label="Member of the United Nations" />
                            <StatusFilter label="Independent" />
                        </div>
                    </div>
                </div>
                <RankingTable 
                    countries={
                        countries
                            .filter(country => 
                                country.name.common.toLowerCase().includes(filterText.toLowerCase()) || country.name.official.toLowerCase().includes(filterText.toLowerCase()) ||
                                country.region.toLowerCase().includes(filterText.toLowerCase()) || country.subregion.toLowerCase().includes(filterText.toLowerCase())
                            ).sort((c1,c2) => {
                                if(sortType === 'name')
                                    return c1.name.common.toLowerCase().localeCompare(c2.name.common.toLowerCase());
                                if(sortType === 'population' || sortType === 'area')
                                    return c2[sortType] - c1[sortType];
                                if(sortType === 'region')
                                    return c1.region.toLowerCase().localeCompare(c2.region.toLowerCase());
                                return 0;
                            })
                    } 
                />
            </div>
        </div>
    );
}

export default RankingPageClient;