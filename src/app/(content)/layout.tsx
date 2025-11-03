import Image from "next/image";
import styles from "./layout.module.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className={styles.layout}>
      <Image
        src='/icons/Logo.svg'
        alt='World Ranks'
        width={174}
        height={24}
        className={`${styles.logo} text__lg--semibold`}
      />
      {children}
    </main>
  );
}

export default Layout;
