import { useSnapshot } from "valtio";
import state from '../store';

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab 
  ? {backgroundColor: snap.color, opacitiy: 0.5}
  : {backgroundColor: "transparent", opacitiy: 1}

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
    >
      
    </div>
  )
}

export default Tab
