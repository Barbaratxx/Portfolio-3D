import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Where design meets development for web excellence.",
            1000,
            "Creative design technical development perfect web solutions every time. ",
            1000,
          ]}
          wrapper="span"
          speed={30}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/perfilS.png" alt="" />
    </motion.div>
  );
};

export default Speech;