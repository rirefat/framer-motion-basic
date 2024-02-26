import { motion } from 'framer-motion';

const TransitionType = () => {
    const msg = "I am enjoying Framer Motion with LWS and instructor is Tapash Adhikary. Now I'm learning Transition Type";
    return (
        <motion.div
            className='flex items-center justify-center flex-col'
            initial={{ opacity: 0, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 , type: "spring", bounce:0.5, stiffness:100}}
        >
            <h3 className='text-2xl my-5 text-center'>Learning Transition Type</h3>
            <p>{msg}</p>
        </motion.div>
    );
};

export default TransitionType;