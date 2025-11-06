"use client"
import styles from "./page-client.module.css";
import RankingTable from "../components/ranking-table/ranking-table";
import StatusFilter from "../components/status-filter/status-filter";
import RegionFilter from "../components/region-filter/region-filter";
import SortListbox from "../components/sort-listbox/sort-listbox";
import SearchBar from "../components/search-bar/search-bar";
import { RankingPageClientProps } from "./types";

const RankingPageClient = (props: RankingPageClientProps) => {
    const { countries } = { ...props } 

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <span className="text__lg--semibold">Found {countries.length} countries</span>
                <SearchBar
                    placeholder="Search by Name, Region..."
                />
            </header>
            <div className={styles.content}>
                <div className={styles.filters}>
                    <div className={styles.filters__content}>
                        <span className="text__sm--medium">Sort by</span>
                        <SortListbox options={['name', 'population', 'area', 'region']} value="population"/>
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
                <RankingTable countries={countries} />
            </div>
        </div>
    );
}

export default RankingPageClient;