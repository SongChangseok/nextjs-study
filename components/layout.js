import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Head from "next/head";

const name = "cssong";
export const siteTitle = "Next.js Sample Website";

const ProfileImage = ({ height, width }) => (
  <Image
    priority
    src="/images/profile.jpg"
    className={utilStyles.borderCircle}
    height={height}
    width={width}
    alt=""
  />
);

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
    </Head>
    <header className={styles.header}>
      {home ? (
        <>
          <ProfileImage height={144} width={144} />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <ProfileImage height={108} width={108} />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      )}
    </header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">Back to home</Link>
      </div>
    )}
  </div>
);

export default Layout;
