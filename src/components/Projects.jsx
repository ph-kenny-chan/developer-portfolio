import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative group ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => {
        if (active !== id)
          handleClick(id);
        else
          window.open(demo, '_blank');
      }}>
      <div
        className={`absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full ${active === id ? 'opacity-[0.3]' : 'opacity-[0.75]'} rounded-[24px]`}></div>

      <img
        src={image}
        alt={name}
        className={`absolute w-full h-full object-cover rounded-[24px] 
        group-hover:border-4 group-hover:border-green-800 group-hover:transition-all group-hover:duration-500`}
      />

      {active !== id ? (
        <div className="flex xs:items-start lg:items-center xs:justify-end lg:justify-start xs:pl-[1rem] sm:pl-[-0.5rem] lg:pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap xs:text-[18px] text-[18px] text-timberWolf drop-shadow-xl tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name.length > 20 ? `${name.slice(0, 20)}...` : name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects Handled.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These are the projects that i participated in, from the design phase to
          the deployment phase. I have worked on various projects, from simple
          websites to complex web applications. I have also worked on projects
          that required me to work with a team and projects that i handled
          individually.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
          <motion.div
          variants={fadeIn('right', 'spring', projects.length * 0.5, 0.75)}
          className={`relative ${
            'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center min-w-[170px]
          h-[420px] card-shadow`}>
            <div
            className="absolute top-0 left-0 z-10 bg-jetLight 
              h-full w-full opacity-[0.5] rounded-[24px]"></div>
            <div className="flex xs:items-start lg:items-center xs:justify-end lg:justify-start xs:pl-[1rem] sm:pl-[-0.5rem] lg:pr-[4.5rem]">
              <h3
                className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
            absolute text-[18px] text-timberWolf tracking-[1px]
            whitespace-nowrap z-0 lg:text-[18px] lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
            leading-none z-20">
                and numbers of Backend Projects...
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
