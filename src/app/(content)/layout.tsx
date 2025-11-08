import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className={styles.layout}>
      <Link 
        href='/ranking'
        className={styles.logo}
      >
        <Image
          src='/icons/Logo.svg'
          alt='World Ranks'
          width={174}
          height={24}
          className="text__lg--semibold"
        />
      </Link>
      {children}
    </main>
  );
}

export default Layout;
