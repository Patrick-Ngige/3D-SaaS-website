import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import state from '../store';
import { useRef } from "react";
import { useSnapshot } from "valtio";


const CameraRig = ({children}) => {
    const group = useRef();
    const snap = useSnapshot(state);

    //set the model rotation smoothly
    

  return <group ref={group}>{children}</group>   
}

export default CameraRig
