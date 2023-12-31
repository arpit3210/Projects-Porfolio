import React from 'react'
import "./Header.scss";
import { motion } from 'framer-motion';
import { images } from '../../constants';


const Header = () => {
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
            >

                <div className="app__header-badge">
                    <div className='badge-cmp app__flex'>

                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'> Hello, I am</p>
                            <h1 className='head-text'>Arpit</h1>
                        </div>
                    </div>

                    <div className='tag-cmp app__flex'>
                        <p className='p-text'> Blockchain Developer and </p>
                        <p className='p-text'> Smart Contract Developer</p>
                    </div>

                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >

                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile_circle"
                >

                </motion.img>


            </motion.div>



            <motion.div>

            </motion.div>

        </div>
    )
}

export default Header