import "./paymentDetails.scss"

interface PaymentDetailsProps{
    iconSrc: string,
    fullname: string,
    dni: string,
    planName: string,
    price: string,
    phone: string

}

export const PaymentDetails = ({iconSrc, fullname, dni, planName, price, phone}:PaymentDetailsProps) => {
  return (
    <div className="paymentDetails">
        <p>PRECIOS CALCULADOS PARA:</p>
        <div className="paymentDetails-client">
            <img src={iconSrc} alt="" />
            <h2>{fullname}</h2>
        </div>
        <hr />
        <div className="paymentDetails-info">
            <h3>Responsable de pago</h3>
            <span>DNI: {dni}</span>
            <span>Celular: {phone}</span>
        </div>
        <div className="paymentDetails-info">
            <h3>Plan elegido</h3>
            <span>{planName}</span>
            <span>Costo del plan: ${price} al mes</span>
        </div>
    </div>
  )
}