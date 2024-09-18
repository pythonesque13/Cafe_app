import React from 'react'
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
    FaMapMarkerAlt,
} from "react-icons/fa";
import CreditsCards from "../../assets/website/credit-cards.webp";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity:0, y:100}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{
                        duration:0.6,
                        delay:0.2,
                    }}
                    className="space-y-6">
                    <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>

                    <p className=" text-sm max-w-[300px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe eaque consequuntur magnam? Quod architecto mollitia,
                        est corrupti, aperiam non maiores tenetur totam
                        esse magnam expedita explicabo.
                        Delectus sequi totam sit?
                    </p>
                    <div>
                        <p className="flex items-center gap-2 mt-2">
                            <FaPhone/>
                            694-395-731
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            {" "}
                            <FaMapMarkerAlt/>Noida, Ultar Pradesh
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity:0, y:100}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{
                        duration:0.6,
                        delay:0.4,
                    }}
                    className="space-y-6">
                    <h1 className="text-3xl font-bold">
                        Quick Links
                    </h1>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                    </div>

                </motion.div>

                <motion.div 
                    initial={{ opacity:0, y:100}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once:true, amount:0.5}}
                    transition={{
                        duration:0.6,
                        delay:0.8,
                    }}
                    className="space-y-6">
                    <h1 className="text-3xl font-bold">Follow Us</h1>
                    <div className=" flex items-center gap-3">
                        <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                        <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                        <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                        <FaGoogle className="text-3xl hover:scale-105 duration-300"/>

                    </div>
                    <div>
                        <h1 className="text-xl mb-2 font-semibold">Payments Methods</h1>
                        <img src={CreditsCards}  alt="creditscards" className="w-[80%]"/>
                    </div>
                </motion.div>
            </div>

            <p className="text-white text-center mt-8 pt-8 border-t-2">
                Copyright &copy; 2024 Compagny Name. All rights reserved.
            </p>
        </div>
      
    </div>
  )
}

export default Footer
