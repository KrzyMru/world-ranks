import styles from "./page.module.css";

const Page = async ({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) => {
  const { countryCode } = await params;

  return (
    <>{countryCode}</>
  );
}

export default Page;
