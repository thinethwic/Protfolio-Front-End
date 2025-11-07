import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingHeading = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };
  const fullText = "Thineth Wickramarchchi";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // speed while deleting
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100); // speed while typing
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // hold before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div>
      <motion.h1
        variants={fadeInUp}
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent mr-3">
          Hi, I'm
        </span>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {displayText}
        </span>
        <span className="animate-pulse text-secondary">|</span>
      </motion.h1>
    </div>
  );
};

export default TypingHeading;
