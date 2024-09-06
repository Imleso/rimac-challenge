
import {SelectCircule} from "../../../../components";
import "./planSelect.scss";

interface PlanSelectProps {
  src: string;
  title: string;
  text: string;
  onclick: ()=> void,
  isActive: boolean
}

export const PlanSelect = ({ src, title, text, onclick, isActive }: PlanSelectProps) => {

  return (
    <div className={`planSelect${isActive ? '-select':''}`} onClick={onclick}>
      <div className="planSelect-button">
        <SelectCircule isSelected={isActive}/>
      </div>
      <div className="planSelect-description">
          <div className="planSelect-description-title">
            <img src={src} alt="" />
            <h2>{title}</h2>
          </div>
          <p>{text}</p>
      </div>
    </div>
  );
};


