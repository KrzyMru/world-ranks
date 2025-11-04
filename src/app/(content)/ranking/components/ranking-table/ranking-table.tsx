"use client"
import Image from "next/image";
import { RankingTableProps } from "./types";
import styles from "./ranking-table.module.css";
import { useRouter } from "next/navigation";

const RankingTable = (props: RankingTableProps) => {
    const { countries } = { ...props }
    const router = useRouter();

    return (
        <table className={styles.ranking}>
            <thead className={styles.ranking__header}>
                <tr>
                    <th scope="col" className="text__sm--medium">Flag</th>
                    <th scope="col" className="text__sm--medium">Name</th>
                    <th scope="col" className="text__sm--medium">Population</th>
                    <th scope="col" className="text__sm--medium">Area(km<sup>2</sup>)</th>
                    <th scope="col" className="text__sm--medium">Region</th>
                </tr>
            </thead>
            <tbody className={styles.ranking__body}>
                {countries.map((country) => (
                    <tr 
                        key={country.cca3}
                        role="link"
                        tabIndex={0}
                        onClick={() => router.push(country.cca3)}
                        onKeyDown={(e) => e.key === 'Enter' && router.push(country.cca3)}
                    >
                        <td>
                            <Image
                                src={country.flags.png}
                                alt={country.flags.alt}
                                width={52}
                                height={36}
                                className={styles.ranking__flag}
                            />
                        </td>
                        <td className="text__lg--medium">{country.name.common}</td>
                        <td className="text__lg--medium">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="text__lg--medium">{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td className="text__lg--medium">{country.region}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RankingTable;