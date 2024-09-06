import { Navigate, useNavigate } from "react-router-dom";
import ButtonCircule from "../../components/circule/buttonCircule/ButtonCircule";
import { usePlansStore } from "../../store/planStore"
import { useUserStore } from "../../store/userStore"
import { PaymentDetails } from "./components/paymentDetails/PaymentDetails";
import "./summary.scss"
import Button from "../../components/button/Button";
import CirculeNumber from "../../components/circule/circuleNumber/CirculeNumber";

export const Summary = () => {

    const {user: userStore} = useUserStore()
    const {plan: planStore, setPlan} = usePlansStore()
  const navegar = useNavigate()
    const handleClean = ()=>{
      localStorage.clear(); 
      navegar("/rimac-challenge/")
    }
    
  return (<>
    {planStore.name != "" ? (

      <div className="summary">
          <div className="summary-stepContentDesktop">
        <CirculeNumber number={1} isHere={false} />
        <p>Planes y coberturas</p>
        <p className="summary-stepContentDesktop-line">----</p>
        <CirculeNumber number={2} isHere={true} />
        <span><strong>Resumen</strong></span>
      </div>
      <div className="summary-content">
          <div className="summary-back" onClick={()=> setPlan({name: "", price: 0, description: [""], age: 0})}>
              <ButtonCircule  isActive={true} />
              <p>Volver</p>
          </div>
          <div className="summary-title">
            <div className="summary-back-mobile" onClick={()=> setPlan({name: "", price: 0, description: [""], age: 0})}>
              <ButtonCircule  isActive={false} />
            </div>
            <h1>Resumen del seguro</h1>
          </div>
          <PaymentDetails fullname={userStore.name + " " + userStore.lastName} iconSrc={`${import.meta.env.BASE_URL}assets/img/gl_family-24x24.png`} dni="12345678" price={String(planStore.price)} planName={planStore.name} phone="987654321"/>
          <Button variant="black" onClick={()=> handleClean()} text="¡Listo!"/>
      </div>
      </div>

    ) : <Navigate to="/planes"></Navigate>}
  </>
  )
}
