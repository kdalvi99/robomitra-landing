import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
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
