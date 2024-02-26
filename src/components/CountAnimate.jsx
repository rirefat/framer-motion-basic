import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const CountAnimate = () => {
    const count = useMotionValue(0);
    const transformedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 4 })
        return animation.stop;
    }, [])
    
    return (
        <>
            <div
                className='flex items-center justify-center flex-col'
            >
                <h3 className='text-2xl my-5 text-center'>Counting Animation</h3>
                <div>
                    <span>Count: </span>
                    <motion.span>
                        {transformedValue}
                    </motion.span>
                </div>
            </div>

        </>

    );
};

export default CountAnimate;