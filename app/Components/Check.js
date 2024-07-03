'use client'
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const HoverEffect = () => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({ rotate: 10 });
  };

  const handleHoverEnd = () => {
    controls.start({ rotate: 0 });
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <motion.div
        animate={controls}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#f00",
          margin: "10px",
        }}
      />
      <motion.div
        animate={controls}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#0f0",
          margin: "10px",
        }}
      />
    </motion.div>
  );
};

const Check = () => {
  return (
    <div>
      <HoverEffect />
      <HoverEffect />
      <HoverEffect />
    </div>
  );
};

export default Check;
