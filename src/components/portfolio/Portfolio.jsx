import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Document, Page } from 'react-pdf';

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Social Media Content Creator",
    desc: "Expert social media content creator with a proven track record of boosting brand visibility and engagement. From concept to execution, I develop tailored content strategies that resonate with target audiences and deliver measurable growth across all major platforms.",
    link: "./public/cv.pdf",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Food App Design",
    desc: "This project showcases a comprehensive mobile application design for food ordering and discovery. The interface features a modern, user-friendly approach with warm color palettes and intuitive navigation patterns.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Exotic Flower Website",
    desc: "This captivating web design project brings the beauty of exotic flora to life through stunning visual storytelling and interactive elements. The website features breathtaking botanical imagery with smooth animations that create an immersive, garden-like browsing experience.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Event Mobile App",
    desc: "Event Buddy is a comprehensive mobile application designed to revolutionize how users discover and connect with local events and cultural experiences. This intuitive app serves as your personal guide to finding the perfect events, from intimate gatherings to large-scale festivals and concerts.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Built with performance and user experience in mind, this portfolio showcases advanced front-end development skills through smooth transitions, engaging micro-interactions, and responsive design principles. The animated elements guide users through different sections while maintaining focus on the showcased work and professional achievements.",
    link: "/",
  },
];

const handleViewCV = (link) => {
  window.open(link, '_blank');
};

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button onClick={() => handleViewCV(item.link)}>
  View CV
</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [-0.03, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
//backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#e5be41ff"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;