import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 28, scale: 0.98, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function FadeIn({ children, className, delay = 0, as = "div", ...props }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      custom={delay}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default FadeIn;
