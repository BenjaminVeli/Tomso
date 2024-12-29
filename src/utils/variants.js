// <----------------------------------- ANIMATIONS HERO ----------------------------------->

export const HeroVariants = (direction) => {
    return {
        hidden: {
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        }
    }
}


// <----------------------------------- SERVICES ----------------------------------->

export const titleVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
        }
    }
};

export const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.01,
            ease: "easeOut",
            delay: custom * 0.07,
        }
    })
};

// <----------------------------------- PROCESS ----------------------------------->