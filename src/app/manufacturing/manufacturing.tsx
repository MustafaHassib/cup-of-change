import Image from 'next/image';
import styles from './manufacturing.module.scss';
import banner from '../../../public/images/manufacturing/Mask Group 5@2x.png';
import banner2 from '../../../public/images/manufacturing/Mask Group 4@2x.png';
import certIcon from '../../../public/images/manufacturing/ISO9001-2015@2x.png';

export const Manufactoring = () => {
  return (
    <section className={styles.manufacturing} id="manufacturing">
      <div className={styles.manufacturing__banner}>
        <Image src={banner} alt="" />
      </div>

      <h3>MANUFACTURING</h3>
      <p>
        Akbar Brothers Operates Sri Lankas Largest Ceylon Tea Manufacturing
        Facility In Kelaniya, Spanning 276,000 Square Feet. They Prioritize
        Maintaining The Highest Standards Of Quality And Freshness Throughout
        The Tea Production Process. This Involves Meticulous Attention To
        Detail, From Sourcing Ingredients To Blending, Processing, And Packaging
        The Tea. <br />
        <br /> The Facility Boasts Cutting-Edge Machinery Imported From Germany,
        Italy, And Japan, Ensuring Efficiency And Adherence To Strict Hygiene
        Standards By Minimizing Human Contact. Akbar Brothers Holds Various
        Certifications Such As ISO 9001, ISO 22000, Good Manufacturing Practice,
        And Fair Trade, Reflecting Their Commitment To International Standards
        And Quality Control.
      </p>

      <div className={styles.manufacturing__banner}>
        <Image src={banner2} alt="" />
      </div>
      <div className={styles.certification}>
        <h3 className={styles.certification__title}>CERTIFICATIONS</h3>
        <p className={styles.certification__subtitle}>
          Akbar Brother (Pvt) Limited To Become The First Ever Sri Lankan Tea
          Company To Be Awarded The Internationally Recognized ISO 9001 And
          HACCP Quality Certificates.
        </p>
      </div>
      <div className={styles.certification__wrapper}>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
        <div className={styles.certification__wrapper__body}>
          <div className={styles.cert_icon}>
            <Image src={certIcon} alt="iso badge" />
          </div>
          <h6>ISO 9001</h6>
          <p>
            HACCP- The Hazard Analysis And Critical Control Point (HACCP) Is A
            Systematic Preventive Approach Used In The Food Industry To Ensure
            Food Safety. It Identify Physical, Chemical And Biological Hazards
            In Order To Eliminate The Risk Of The Hazards Being Realized At The
            Following Activities At Akbar Tea’s Manufacturing Facilities:
            Blending, Flavouring, Packing Of Processed Tea And Herbs
          </p>
        </div>
      </div>
    </section>
  );
};
