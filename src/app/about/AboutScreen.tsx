import Image from 'next/image';
import styles from './AboutScreen.module.scss';

import aboutIntro from '../../../public/images/about/about-intro.jpg';
import oscarImage from '../../../public/images/about/1@2x.png';

export const AboutScreen = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <h2 className={styles.hero__content__title}>
            TRANSFORM YOUR TEA EXPERIENCE
          </h2>
          <p className={styles.hero__content__desc}>
            Cup Of Change Is An Egyptain Based Company Deeply Rooted In The Rich
            Heritage Of Sri Lanka’s Tea Industry, Drawing On Four Generations Of
            Tea Tasting, Blending, And Packaging.
          </p>
          <p className={styles.hero__content__desc}>
            The Journey Begins With Our Forefathers Founding M. S. Hebtulabhoy &
            Company Established In 1907. This Historic Company Played A Pivotal
            Role As Export Pioneers, Venturing Into The Tea Business When It Was
            Dominated By British-Based Companies. Their Bold Move Not Only Broke
            Monopolies But Also Diversified Into Various Sectors Like Coconut
            Products, Spices, And Modern Machinery For Tea Processing. Their
            Commitment To Innovation And Quality Laid A Strong Foundation For
            The Ceylonese Tea Industry’s Growth.
          </p>
        </div>
        <div className={styles.hero__img}>
          <Image src={aboutIntro} alt="" />
        </div>
      </div>

      <div className={styles.about_wrapper__founded}>
        <p>
          Founded In 1969 By The Visionary Akbarally Brothers Abbas And Inayet,
          Akbar Brothers (Pvt) Limited Has Become Synonymous With Excellence In
          The Tea Industry. Their Forward-Thinking Approach Led Them To
          Revolutionize Tea Bag Production Through Advanced Machinery And To
          Develop Robust Warehousing Capabilities To Meet The Growing Global
          Demand. As The Largest Tea Company In Sri Lanka, They Have Held The
          Prestigious Title Of The Worlds Largest Exporter Of Ceylon Tea For An
          Impressive 30 Consecutive Years. Their Commitment To Quality Is
          Unmatched, With Every Consignment Of Akbar Tea Personally Approved By
          A Family Member Before Shipment, Ensuring Exceptional Standards And
          Reliability. Akbar Brothers Global Footprint Extends To Over 90
          Nations, Making Their Premium Ceylon Tea A Favorite Among Millions Of
          Tea Enthusiasts Worldwide. At Cup Of Change, We Take Pride In Carrying
          Forward Our Family Legacy Of Excellence And Innovation Representing
          Akbar Brothers (Pvt) Limited In Egypt. Our Curated Selection Of
          Premium Teas And Brands Reflects Our Deep Understanding Of Tea
          Traditions And Commitment To Quality, Sustainability And Authenticity.
        </p>
      </div>

      <div className={styles.akbar_brand}>
        <h2 className={styles.title}>THE AKBAR BRAND</h2>

        <div className={styles.akbar_brand__content}>
          <div className={styles.akbar_brand__content__img}>
            <Image src={oscarImage} alt="" />
          </div>
          <div className={styles.akbar_brand__content__tabs}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
