import { AnimatePresence, motion } from 'framer-motion';

const ButtonTap = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h3 className='text-2xl my-5 text-center'>Gesture Animation</h3>

            <motion.button
                className='px-4 py-2 bg-purple-800 text-white rounded'
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{
                    scale: 0.9,
                    transition: { duration: 1 }
                }}
            >
                Tap Me
            </motion.button>
        </div>
    );
};

export default ButtonTap;