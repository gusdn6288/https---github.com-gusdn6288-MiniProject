import { useState } from "react";
import HoverRotateImg from "./HoverRotateImg";
import style from "./ModelCardItem.module.css"

const ModelCardItem = ({ model }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={style.modelCard}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      <div className={style.modelInfo}>
        <h3>모델 알아보기</h3>
        <h2>{model.mdname}</h2>
      </div>
      <div className={style.modelImageContainer}>
        <HoverRotateImg modelName={model.mdname} isHovered={isHovered} /> 
      </div>
    </div>
  );
};

export default ModelCardItem;
