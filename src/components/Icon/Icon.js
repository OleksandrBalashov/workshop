import sprite from "../../images/sprite.svg";
import "./icon.scss";

const Icon = ({ icon }) => {
  return (
    <svg width={32} height={32} className='iconSprite'>
      <use href={`${sprite}#${icon}`}></use>
    </svg>
  );
};

export default Icon;
