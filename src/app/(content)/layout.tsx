import styles from "./layout.module.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default Layout;
