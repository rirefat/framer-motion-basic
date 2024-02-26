import { motion } from 'framer-motion';

const Variants = () => {
    const variants = {
        initial: {
            opacity:0,
            y:'100vh'
        },
        animate: {
            opacity: 1,
            y:0,
            transition:{
                type:"spring",
                bounce:0.5,
                stiffness:70,
                duration: 1
            }
        }
    }
    return (
        <motion.div
            className='flex items-center justify-center flex-col'
        >
            <h3 className='text-2xl my-5 text-center'>Testing Animation Variants</h3>

            <motion.div
                className="h-16 w-16 rounded-full bg-green-500 shadow-xl"
                variants={variants}
                initial="initial"
                animate="animate"
            />
        </motion.div >
    );
};

export default Variants;