import Image from 'next/image';

import styles from './ourSelection.module.scss';
import img1 from '../../../public/images/our-selection/6-2@2x.png';
import img2 from '../../../public/images/our-selection/6-3@2x.png';
import img3 from '../../../public/images/our-selection/6@2x.png';
import img6 from '../../../public/images/our-selection/6-1@2x.png';

export const OurSelection = () => {
  return (
    <div className={styles.our_selection}>
      <div className={styles.our_selection__hero}>
        <h4>OUR SELECTION</h4>
        <p>
          Your B2B Supplier, For Bulk Tea And Private Labelling Ceylon And
          Kenyan Teas.
        </p>
      </div>

      <div className={styles.ceylon_tea_kinds}>
        <h4>CEYLON TEA</h4>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img3} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>OP – ORANGE PEKOE</h5>
            <p>
              Contrary To Popular Belief, Orange Pekoe Refers To A Leaf Size And
              Not A Flavour. Orange Pekoe Tea Has A Strong Scent And A Smooth
              Flavour With A Sweet Finish.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img1} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>PEKOE</h5>
            <p>
              Pekoe Refers To Tea Made From The Just-Unfurling Buds Of The Tea
              Bush. Pure Pekoes Are Tightly Rolled Into A Near Spherical Shape
              And Need Extreme Care When Manufacturing.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img6} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>BOPF - BROKEN ORANGE PEKOE FANNINGS</h5>
            <p>
              Uniform, Black-Leaf Tea Particles Which Are Smaller Than BOP But
              Without Tips, Hailing From Higher Elevated Regions. Bright In
              Colour With A Strong Taste That Retains Most Characteristics Of
              BOP. Ideal For Tea Bags.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img2} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>GOLDEN TIPS</h5>
            <p>
              Very Rare Pale Golden Velvety Whole Buds Taken From Select Plants,
              Has A Very Delicate Brew With A Mild Floral Bouquet.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ceylon_tea_kinds}>
        <h4>KENYAN TEA</h4>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img1} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>OP – ORANGE PEKOE</h5>
            <p>
              Contrary To Popular Belief, Orange Pekoe Refers To A Leaf Size And
              Not A Flavour. Orange Pekoe Tea Has A Strong Scent And A Smooth
              Flavour With A Sweet Finish.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img2} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>PEKOE</h5>
            <p>
              Pekoe Refers To Tea Made From The Just-Unfurling Buds Of The Tea
              Bush. Pure Pekoes Are Tightly Rolled Into A Near Spherical Shape
              And Need Extreme Care When Manufacturing.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img3} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>BOPF - BROKEN ORANGE PEKOE FANNINGS</h5>
            <p>
              Uniform, Black-Leaf Tea Particles Which Are Smaller Than BOP But
              Without Tips, Hailing From Higher Elevated Regions. Bright In
              Colour With A Strong Taste That Retains Most Characteristics Of
              BOP. Ideal For Tea Bags.
            </p>
          </div>
        </div>
        <div className={styles.kind}>
          <div className={styles.kind__image}>
            <Image src={img6} alt="" />
          </div>
          <div className={styles.kind__body}>
            <h5>GOLDEN TIPS</h5>
            <p>
              Very Rare Pale Golden Velvety Whole Buds Taken From Select Plants,
              Has A Very Delicate Brew With A Mild Floral Bouquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
