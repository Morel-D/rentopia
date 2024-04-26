const animateFromRight = 
{
    hidden: {
        x: '100%'
    },
    visible: {
        x: 0,
        transition:{stiffness: 300, duration: 1}
    }
}

const animateFromLeft = 
{
    hidden: {
        x: '-100%'
    },
    visible: {
        x: 0,
        transition:{stiffness: 300, duration: 1}
    }
}

const hoverBtn =
{
    hover: {
        scale: 1.1,
        transition: {yoyo: Infinity,  duration: 0.3}
    }

} 

export { animateFromRight, animateFromLeft, hoverBtn }