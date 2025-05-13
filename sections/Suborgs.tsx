'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./pageStyle.module.scss";

import TestImage1 from "public/F1Wheel.jpg";
import TestLogo from "public/Testing.png";


interface ItemDescriptionProps {
    id: string;
    name: string;
    subtitle: string;
    colorClass: string;
    links: { src: string; logo: string; alt: string }[];
    description: React.ReactNode;
    srcs: string[];
    alts: string[];
}

const ItemImages: React.FC<{
    srcs: string[];
    alts: string[];
}> = ({ srcs, alts }) => {
    return (
        <div className={styles.imageGrid}>
            <div className={`${styles.nextImageHolder} ${styles.pic1}`}>
                <Image
                    src={srcs[0]}
                    alt={alts[0]}
                    fill
                    sizes="(max-width: 812px) 100vw, 450px"
                />
            </div>
            <div className={`${styles.nextImageHolder} ${styles.pic2}`}>
                <Image
                    src={srcs[0]}
                    alt={alts[0]}
                    fill
                    sizes="(max-width: 812px) 100vw, 450px"
                />
            </div>
            <div className={`${styles.nextImageHolder} ${styles.pic3}`}>
                <Image
                    src={srcs[0]}
                    alt={alts[0]}
                    fill
                    sizes="(max-width: 812px) 100vw, 450px"
                />
            </div>
            <div className={`${styles.nextImageHolder} ${styles.pic4}`}>
                <Image
                    src={srcs[0]}
                    alt={alts[0]}
                    fill
                    sizes="(max-width: 812px) 100vw, 450px"
                />
            </div>
        </div>
    )
}

const ItemDescription: React.FC<ItemDescriptionProps> = ({
    id,
    name,
    subtitle,
    colorClass,
    links,
    description,
    srcs,
    alts,
}) => {
    return (
        <div className={`item-description ${styles.itemCard} ${colorClass}`} id={id}>
            <div className={`${styles.content}`}>
                <div className={`${styles.descHolder}`}>
                    <div>
                        <h3 className={styles.title}>{name}</h3>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>
                    {description}
                    <div className={styles.itemLinks}>
                        {links.map((link, index) => (
                            <a key={`${link}-${index}`} href={link.src}>
                                <Image
                                    src={link.logo}
                                    alt={link.alt}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <ItemImages srcs={srcs} alts={alts} />
            </div>
            <div className={styles.blob} />
        </div>
    );
};

const ItemsHeader: React.FC<{
    selected: string;
    logo: StaticImageData;
    label: string;
    id: string;
}> = ({ selected, logo, label, id }) => {
    return (
        <a
            href={`#${id}`}
            className={`${styles.logoCard} ${selected === id ? styles.active : ""}`}
        >
            <img src={logo.src} alt="" className={styles.logoHover} />
            <img src={logo.src} alt={label} className={styles.logo} />
        </a>
    );
};

const Test1: React.FC = () => (
    <ItemDescription
        id="test1"
        name="test1"
        subtitle="test1"
        colorClass={styles.red}
        links={[{
            src: "https://www.linkedin.com/in/ethan-y-zhao/",
            logo: TestImage1.src,
            alt: "Linkedin",
        }]}
        description={
            <>
                <p>
                    TESTINGTESTING123
                </p>
            </>
        }
        srcs={[TestImage1.src]}
        alts={["TestingImage1"]}
    />
);

const Suborgs: React.FC = () => {
    const [section, setSection] = useState<"Projects" | "Awards">(
        "Projects"
    );
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const middle = window.innerHeight / 2;
            
            setSection(
                middle >
                    (document.getElementById("Awards")?.getBoundingClientRect()
                        .top ?? 0)
                    ? "Awards"
                    : "Projects"
            );

            const projects = document.getElementsByClassName("item-description");
            for (const project of Array.from(projects).reverse()) {
                const { top } = project.getBoundingClientRect();
                if (middle > top) {
                    setSelected(project.id);
                    return;
                }
            }
            setSelected("");
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("Scroll", handleScroll);
        };
    }, []);

    return(
        <>
            <h1 className={styles.title}>
                Testing <strong>Testing</strong>
            </h1>
            <p className={styles.tagLine}>
                Testing
            </p>
            <nav className={styles.sectionNav}>
                <a href="#Projects" className={section === "Projects" ? styles.active : ""}>Projects</a>
                <a href="#Awards" className={section === "Awards" ? styles.active : ""}>Awards</a>
            </nav>
            <section id="Projects">
                <h2 className={styles.sectionHeading}>Projects</h2>
                <nav className={styles.subOrgnav}>
                    <ItemsHeader
                        selected={selected}
                        id="test1"
                        label="test1"
                        logo={TestLogo}
                    />
                </nav>
                <Test1/>
            </section>
            <section id="Awards">
                <h2 className={styles.sectionHeading}>Projects</h2>
                <nav className={styles.subOrgnav}>
                    <ItemsHeader
                        selected={selected}
                        id="test1"
                        label="test1"
                        logo={TestLogo}
                    />
                </nav>
                <Test1/>
            </section>
        </>
    );
};

export default Suborgs;