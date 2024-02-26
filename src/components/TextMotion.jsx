import { motion } from 'framer-motion';

const TextMotion = () => {
    const msg = "I am enjoying Framer Motion with LWS and instructor is Tapash Adhikary.";
    const msgArray = msg.split(" ");
    return (
        <div className='flex items-center justify-center flex-col'>
            <h3 className='text-2xl my-5 text-center'>Text Animation</h3>
            <p className='text-xl text-center text-rose-800 font-bold'>
                {
                    msgArray.map((msg, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 2,
                                delay: index / 20
                            }}
                        >
                            {msg}{" "}
                        </motion.span>
                    ))
                }
            </p>
        </div>
    );
};

export default TextMotion;