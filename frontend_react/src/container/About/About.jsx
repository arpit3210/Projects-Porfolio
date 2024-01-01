import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import "./About.scss";
// import { images } from '../../constants';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

// const abouts = [
//   { title: 'Web Development', description: 'I am good web developer.', imgUrl: images.about01 },
//   { title: 'Blockchain  ', description: 'I am good Good Blockchain Knowledge.', imgUrl: images.about02 },
//   { title: 'Smart Contract Development', description: 'I have good experience in smart contract development.', imgUrl: images.about03 },
//   { title: 'Decentralize Finance Development', description: 'I can build Defi scalable apps.', imgUrl: images.about04 }
// ];


const About = () => {

const [abouts, setAbouts] = useState([])


useEffect(() => {
  
const query = '*[_type == "abouts"]';

client.fetch(query)
.then((data)=>{ setAbouts(data)})

}, [])



  return (
    <>
    <div className='spacer'></div>
      <h2 className='head-text'> I know that <span> Good Dapps </span><br /> means <span> Good Business </span></h2>


      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className='bold-text' style={{ marginTop: 20 }}> {about.title} </h2>

            <p className='p-text' style={{ marginTop: 20 }}> {about.description} </p>
          </motion.div>
        ))}

      </div>


    </>
  )
}

export default AppWrap( About, 'about');