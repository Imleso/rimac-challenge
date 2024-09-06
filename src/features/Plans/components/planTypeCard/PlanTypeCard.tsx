
import Button from "../../../../components/button/Button"
import "./planTypeCard.scss"

interface PlanTypeCardProps{
    planName: string,
    iconSrc: string,
    price: string,
    descriptions: string[],
    onclick: ()=> void
}
export const PlanTypeCard = ({planName, iconSrc, price, descriptions, onclick}:PlanTypeCardProps) => {
  return (
    <div className="planCard">
        <div className="planCard-name">
            <h2>{planName}</h2>
            <img src={iconSrc} alt="" />
        </div>
        <div className="planCard-price">
            <p>Costo del Plan</p>
            <h3>${price} al mes</h3>
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

