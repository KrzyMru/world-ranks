import Image from "next/image";
import styles from "./page.module.css";
import { CountryDataRanking } from "./types";

const Page = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,subregion,population,area,flags,independent,unMember", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const countries: CountryDataRanking[] = await data.json();

  return (
    <div>
      <div>
        <span>Found 234 countries</span>
        <div>Search bar</div>
      </div>
      <div>
        <div>Sorting</div>
        <div>Region filters</div>
        <div>Status filters</div>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Population</th>
            <th scope="col">Area(km<sup>2</sup>)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              <Image
                src='https://flagcdn.com/w320/de.png'
                alt=''
                width={56}
                height={28}
              />
            </td>
            <td scope="row">Germany</td>
            <td scope="row">83491249</td>
            <td scope="row">357114</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Page;
