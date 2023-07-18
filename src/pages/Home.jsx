import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { 
  headContainerAnimation,
  headContentAniamtion,
  headTextAnimation,
  slideAnimation
} from  '../config/motion';
import state from '../store';
import React from 'react';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation ('left')}></motion.div>
      )}
    </AnimatePresence>
  )
}

export default Home
