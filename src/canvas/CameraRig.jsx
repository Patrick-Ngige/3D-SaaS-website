import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import state from '../store';
import { useRef } from "react";
import { useSnapshot } from "valtio";


const CameraRig = ({children}) => {
    const group = useRef();
    const snap = useSnapshot(state);

    //setting the model rotation smoothly
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;
        
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,delta
        )
    })

    

  return <group ref={group}>{children}</group>   
}

export default CameraRig
