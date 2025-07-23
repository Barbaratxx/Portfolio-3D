import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import Counter from "./Counter";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariants = {
    initial:{
        x: -100,
        y:-100,
        opacity: 0,
    },
    animate:{
        x: 0,
        y: 0,   
        opacity: 1,
        transition: {
            duration: 1,
    },
},
};


const listVariants = {
    initial:{
        x: -100,
        opacity: 0,
    },
    animate:{
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
    },
},
};



const services =[

    {
        id: 1,
        img: "./service1.png",
        title: "Web Development",   
        counter: 35,
    },
    {
       id: 2,
        img: "./service2.png", 
        title: "Graphic Design",
        counter: 23,
    },
    
    {
        id: 32,
        img: "/service3.png", 
        title: "Multimedia",
        counter: 23,
    },
];

const  Services = () => {
    const [currentServiceId, setCurrentServiceId] = useState(1);
    const ref=useRef();
    const isInView = useInView(ref,{margin:"-200px"});
     return(
        <div className="services" ref={ref}>
            <div className="sSection left">

                <motion.h1 
                variants={textVariants} 
                animate={isInView? "animate" : "initial"}
                className="sTitle">
               How may i help?
               </motion.h1>
                 <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
                <div className="counterList">
                    <Counter from={0} to={81} text="Projects Completed"/>
                   <Counter from={0} to={61} text="Happy Clients"/>
                </div>
            </div>

            <div className="sSection right">
                {currentServiceId === 1? (<ComputerModelContainer/>):currentServiceId === 2? (<ComputerModelContainer/>):<ComputerModelContainer/>}
                
            </div>


        </div>
     );
    };
    export default Services;
