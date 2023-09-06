import {easing} from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
    >
      <RandomizedLight 
        amount={4}
      />
      <RandomizedLight />
    </AccumulativeShadows>
  )
}

export default Backdrop
