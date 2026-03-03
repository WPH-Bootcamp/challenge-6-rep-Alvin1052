import { motion, type Variants } from 'motion/react';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    };
  },
};

export const BufferSkeleton = () => {
  return (
    <div className='min-h-screen relative'>
      <motion.svg
        className='size-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        width='600'
        height='600'
        viewBox='0 0 600 600'
        initial='hidden'
        animate='visible'
      >
        <motion.circle
          cx='50%'
          cy='50%'
          r='80'
          fill='none'
          stroke='#616161'
          strokeWidth={12}
          variants={draw}
          animate={{
            transition: {
              repeat: Infinity,
              repeatDelay: 0.5,
            },
          }}
        />
      </motion.svg>
    </div>
  );
};
