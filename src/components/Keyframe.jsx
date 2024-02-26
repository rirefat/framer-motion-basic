import { motion } from 'framer-motion';

const Keyframe = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h3 className='text-2xl my-5 text-center'>Keyframe Animation</h3>

            <motion.div
                className='h-32 w-32 bg-red-600 border'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{ duration: 2 }}
            />
        </div>
    );
};

export default Keyframe;