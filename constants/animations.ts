export const navSide = {
    initial: {
        x : "100%",
        transition : {duration: 0.5, ease: 'easeOut'},
    },
    animate: {
        x: "0",
        transition : {duration: 0.5, ease: 'easeInOut'},
    }, 
}

export const listContainer: any =  {
    initial : {
        delayChildren: 0.6,
        staggerChildren: 0.3,
        staggerDirection: -1,
        ease: 'ease',
    },
    animate : {
        delayChildren: 0.5,
        staggerChildren: 0.3,
        ease: 'ease',
        staggerDirection: -1,
    }
}



export const listItems = {
    initial : {
        y: "50vh",
        transition : {duration: 0.8, ease: 'easeInOut'},
        opacity: 0,
        
    },
    animate : {
        y: '0vh',
        opacity: 1,
        transition : {delay: 0.5,duration: 0.6, ease: 'easeOut'},
    }
}
export const headings = {
    initial : {
        x: "50vh",
        transition : {delay: 0.6, ease: 'easeInOut'},
        opacity: 0,
        
    },
    animate : {
        x: '0vh',
        opacity: 1,
        transition : {delay: 0.6,duration: 0.6, ease: 'easeOut'},
    }
}
export const galleryItems = (d: number) =>  ({
    initial : {
        y: "30vh",
        transition : {duration: 0.2, ease: 'easeIn'},
        opacity: 0,
        
    },
    animate : {
        y: '0vh',
        opacity: 1,
        transition : {delay: d + 0.2 ,duration: 0.5, ease: 'easeIn'},
    }
})