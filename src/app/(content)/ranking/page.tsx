import RankingPageClient from "./ranking-page-client/ranking-page-client";
import { CountryDataRanking } from "./types";

const Page = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all?fields=cca3,name,region,subregion,population,area,flags,independent,unMember", {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });
  const [countries] = await Promise.all<CountryDataRanking[]>([
    data.json(),
    new Promise(r => setTimeout(r, 1000)) // Small delay to avoid flickering
  ]);

  return <RankingPageClient countries={countries} />
}

export default Page;
