
import {Button, Tag} from "../../../../components"
import { List } from "../../../../types/plans.type"
import "./planTypeCard.scss"

interface PlanTypeCardProps{
    iconSrc: string,
    onclick: ()=> void,
    isRecomended?: boolean,
    plan: List,
    priceFiltered?: number | boolean;
}
export const PlanTypeCard = ({ iconSrc, onclick, isRecomended = false, plan, priceFiltered = false}:PlanTypeCardProps) => {

    const { description:descriptions, name, price } = plan

  return (
    <div className={`planCard ${isRecomended ? '':'no-recomend'}`}>

        {
            isRecomended && <Tag text="Plan recomendado" />
        }

        <div className="planCard-name">
            <h2>{name}</h2>
            <img src={iconSrc} alt="" />
        </div>
        <div className="planCard-price">
            <p>COSTO DEL PLAN</p>
            {priceFiltered && <div className="planCard-price-reduce">${price} al mes</div>}
            <h3> ${priceFiltered || price} al mes</h3>
        </div>
        <hr />
        <div className="planCard-descriptions">
            <ul>
            {descriptions.map((description, index) => (
                <li key={index}>
                    {description}
                </li>
            )
            )}
            </ul>
        </div>
        <div className="planCard-button" onClick={onclick}>
            <Button text="Seleccionar plan" variant="red"/>
        </div>
    </div>
  )
}

