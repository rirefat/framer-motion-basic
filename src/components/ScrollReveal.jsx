import { motion } from "framer-motion";

const ScrollReveal = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='flex items-center justify-center flex-col'>
            <h3 className='text-2xl my-5 text-center'>Learning Transition Type</h3>

            {
                nums.map((num, index) => (
                    <motion.div
                        key={index}
                        className="w-16 h-16 bg-blue-700 rounded-lg shadow-xl mb-5 text-white flex items-center justify-center text-2xl"
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 50,
                            transition: {
                                duration: 2,
                                type:"spring",
                                bounce: 0.7,
                                stiffness:100
                            }
                        }}
                        viewport={{ once: false }}
                    >{num}
                    </motion.div>
                ))
            }
        </div>
    );
};

export default ScrollReveal;