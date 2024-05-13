import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        <p>
          Kenny is an experienced software developer who worked in different companies in various Industries and provides user-friendly solutions for internal users and customers. He is willing to relocate in UK in the future.
        </p>
        <p>
          He has been working as the System Analyst at Manulife HK since 2018. By developing knowledge of core insurances, software design and vendor management skills, he showed his efficiency in developing the core insurance internal system enhancement of the Volunteering Health Insurance Scheme (VHIS) on the hard deadline in April 2019. As he wants to expand on FinTech products in his career, he joins HKT Financial Services in 2020, which is a FinTech arm of the famous leading telecom HKT Group. He participates in developing Backend API microservices on “HKT Flexi” Mobile Application using his experiences on Java, vendor management skills and agile software development approach.
        </p>
        <p>
          As Software Development is a fast-paced industry, Kenny keeps learning on new trending technology skills like machine learning and AI Programming.
        </p>
        <p>
          On days when he is not doing the project and coding, he is focusing on doing everything on football. Playing on the pitch as a defender, watching football matches and playing any kinds of football games with his friends and family are his favourite things to do in his free time.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
