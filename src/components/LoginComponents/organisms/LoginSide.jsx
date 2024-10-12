import { LoginSideContainer } from './styles';
import ImgSide from '../../../assets/innovation-bro.svg'

import { ButtonSecondary } from "../atoms/Button";
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '40vw'
  },

  animate: {
      opacity: 1,
      x: 0,

    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 1,
      ease: "easeInOut"
    }
  },

  exit:{
    opacity: 0,
    x: '40vw',
    
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 1
    }
  }
}

const imgVariants = {
  initial: {
    opacity: 0
  },
  
  animate: {
    y: [ 0, -10 ],
    opacity: 1,

    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },

      opacity: {
        duration: 1,
      }
    }
  }
}

// eslint-disable-next-line react/prop-types
export const LoginSide = ({ handleSetIsLogin }) => {
  return (
    <LoginSideContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      mode="sync"
    >
        <motion.img src={ImgSide} alt="SVG da ilustração" draggable="false"
          variants={imgVariants}
          exit={false}
          mode="wait"
        />
        

        <h1>Primeira vez?</h1>
        
        <ButtonSecondary title="Registre-se!" onClick={handleSetIsLogin} />
    </LoginSideContainer>
  )
}
