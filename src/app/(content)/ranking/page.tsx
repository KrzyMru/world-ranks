import RankingPageClient from "./ranking-page-client/ranking-page-client";
import { CountryDataRanking } from "./types";

const Page = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,subregion,population,area,flags,independent,unMember", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const countries: CountryDataRanking[] = await data.json();

  return <RankingPageClient countries={countries} />
}

export default Page;
