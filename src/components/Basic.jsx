import { motion } from 'framer-motion';

const Basic = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h3 className='text-2xl my-5'>Basic Animation</h3>
            <motion.div
                className="w-32 h-32 bg-blue-500 rounded-full"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}

                exit = {{
                    x: '-100vw',
                    transition: {
                        ease: 'easeInOut',
                        duration: 1,
                    },
                  }}
            >
            </motion.div>
        </div>

    );
};

export default Basic;