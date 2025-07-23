
import "./contact.css";
 import { Mail, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="contact">
           <div className="cSection">
            <form>
                <h1 className="cTitle">Contact Me</h1>
                <div className="formItem">
                    <label>Name</label>
                    <input type="text" placeholder="Bárbara Teixeira" />
                </div>

                 <div className="formItem">
                    <label>Email</label>
                    <input type="email" placeholder="barbaratxx@gmail.com" />
                </div>

                 <div className="formItem">
                    <label>Message</label>
                    <textarea row={10} placeholder="Write your message..."></textarea>
                </div>
                <button className="formButton">Send</button>

            </form>
           </div>
          

{/*// Na tua secção SVG:*/}
<div className="cSection">
  <motion.div
    animate={{ 
      scale: [2, 2.1, 2],
      rotate: [0, 5, -5, 0], 
      color: ["#f00", "#0f0", "#00f", "#f00"],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" 
    }}
  >
    <Mail size={100} />
  </motion.div>
</div>
        </div>
    );
}
export default Contact;
