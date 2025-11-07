import Image from "next/image";
import styles from "./page.module.css";
import { CountryDataInfo } from "./types";

const Page = async ({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) => {
  const { countryCode } = await params;

  const data = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,continents,currencies,borders,languages,population,subregion,area,flags`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const country: CountryDataInfo = await data.json();

  return (
    <div className={styles.page}>
      <Image
        src={country.flags.png}
        alt={country.flags.alt}
        width={280}
        height={190}
        className={`${styles.country__flag} noselect`}
      />
      <header className={styles.country__names}>
        <span className="text__xl--semibold">{country.name.common}</span>
        <span className="text__lg--medium">{country.name.official}</span>
      </header>
      <div className={styles.country__properties}>
        <div className={styles.country__property}>
          <span className={`${styles.property__name} text__md--medium`}>Population</span>
          <div className={styles.property__divider} />
          <span className={`${styles.property__number} text__md--bold`}>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
        <div className={styles.country__property}>
          <span className={`${styles.property__name} text__md--medium`}>Area(km<sup>2</sup>)</span>
          <div className={styles.property__divider} />
          <span className={`${styles.property__number} text__md--bold`}>{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
      </div>
      <div className={styles.country__info}>
        <div className={styles.info__part}>
          <span className="text__md--medium">Capital</span>
          <span className="text__md--bold">{country.capital.join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Subregion</span>
          <span className="text__md--bold">{country.subregion}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Language</span>
          <span className="text__md--bold">{Object.values(country.languages).join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Currencies</span>
          <span className="text__md--bold">{Object.values(country.currencies).map(v => '('+v.symbol+') '+v.name).join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Continents</span>
          <span className="text__md--bold">{country.continents.join(', ')}</span>
        </div>
      </div>
      <div>Neighbouring Countries</div>
    </div>
  );
}

export default Page;
