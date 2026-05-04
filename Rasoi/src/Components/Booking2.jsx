import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const BookingItem = ({ data }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div initial={{ x: 150, opacity: 0, scale: 0.9 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.1 }} className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <img src={data.image}  alt={data.title} width={data.width} className=''/>
      </motion.div>
    </motion.div>
  );
};

export default function Booking() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const inventory = [
    {title: "iOS 18",image: "public/Family.svg", width: "800"},
    {title: "AirPods 4",image: "public/Family2.svg",width: "600"},
    {title: "Family2", image:"public/Family3.svg"},
    {title: "Family3", image:"public/Family4.svg", width:"800" }
    
  ];

  // Automatic transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inventory.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [inventory.length]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <BookingItem key={currentIndex} data={inventory[currentIndex]} />
      </AnimatePresence>
    </div>
  );
}