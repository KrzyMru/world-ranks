import styles from "./page.module.css";
import { CountryDataRanking } from "./types";
import RankingTable from "./components/ranking-table/ranking-table";
import CheckboxFilter from "./components/checkbox-filter/checkbox-filter";

const Page = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,subregion,population,area,flags,independent,unMember", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const countries: CountryDataRanking[] = await data.json();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className="text__lg--semibold">Found {countries.length} countries</span>
        <div>Search bar</div>
      </header>
      <div className={styles.content}>
        <div className={styles.filters}>
          <div>Sorting</div>
          <div>Region filters</div>
          <div className={styles.filters__status}>
            <span className="text__sm--medium">Status</span>
            <CheckboxFilter label="Member of the United Nations" />
            <CheckboxFilter label="Independent" />
          </div>
        </div>
        <RankingTable countries={countries} />
      </div>
    </div>
  );
}

export default Page;
