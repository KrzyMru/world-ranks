import Image from "next/image";
import styles from "./page.module.css";
import { CountryDataBorder, CountryDataInfo } from "./types";
import Link from "next/link";

const Page = async ({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) => {
  const { countryCode } = await params;

  const countryData = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,continents,currencies,borders,languages,population,subregion,area,flags`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const country: CountryDataInfo = await countryData.json();

  const borderCodes = country.borders.join(',');
  const borderData = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}&fields=cca3,name,flags`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const borderCountries: CountryDataBorder[] = await borderData.json();

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
          <span className={`${styles.info__values} text__md--bold`}>{country.capital.join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Subregion</span>
          <span className={`${styles.info__values} text__md--bold`}>{country.subregion}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Language</span>
          <span className={`${styles.info__values} text__md--bold`}>{Object.values(country.languages).join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Currencies</span>
          <span className={`${styles.info__values} text__md--bold`}>{Object.values(country.currencies).map(v => '('+v.symbol+') '+v.name).join(', ')}</span>
        </div>
        <div className={styles.info__part}>
          <span className="text__md--medium">Continents</span>
          <span className={`${styles.info__values} text__md--bold`}>{country.continents.join(', ')}</span>
        </div>
      </div>
      <div className={styles.neighbour__wrapper}>
        <span className="text__md--medium">Neighbouring Countries</span>
        <ul className={styles.neighbour__list}>
          {
            borderCountries.map(country => 
              <li key={country.cca3}>
                <Link 
                  href={country.cca3}
                  className={styles.neighbour__item}
                >
                  <Image
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width={70}
                    height={48}
                    className={`${styles.neighbour__flag} noselect`}
                  />
                  <span>{country.name.common}</span>
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default Page;
