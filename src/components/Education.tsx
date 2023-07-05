import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
  const ref = useRef(null) as any;

  return (
    <li
      ref={ref}
      className="my-8 first:my-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {type}
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {place} | {time}
        </span>

        <p className="font-medium dark:text-light w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null) as any;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full dark:text-light text-center md:text-6xl xs:text-4xl md:mb-16">
        Formação Acadêmica
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Engenharia de Software"
            time="2023-2026"
            place="Estácio"
            info="O curso de Engenharia de Software aborda a computação voltada para a especificação, desenvolvimento, manutenção e criação de softwares."
          />
          <Details
            type="Análise e Desenvolvimento de Sistemas"
            time="2019-2022"
            place="Fatec Profº Waldomiro May"
            info="Graduação focada em criar, projetar, desenvolver e configurar programas, softwares e sistemas para inúmeras empresas."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
