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
      <img 
      src={tab.icon}
      alt={tab.name}
      className={`${isFilterTab ? 'w-2/3 h-2/3' : 
      'w-11/12 h-11/12 object'}`}
      />
    </div>
  )
}

export default Tab
