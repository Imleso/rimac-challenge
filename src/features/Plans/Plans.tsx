import { useEffect, useState } from "react";
import ButtonCircule from "../../components/circule/buttonCircule/ButtonCircule";
import CirculeNumber from "../../components/circule/circuleNumber/CirculeNumber";
import { useGetPlans } from "../../hooks/useGetPlans";
import { useUserStore } from "../../store/userStore";
import { List } from "../../types/plans.type";
import {PlanTypeCard, PlanSelect } from "./components";
import "./plans.scss"
import { calculateAge } from "../../utils";
import { usePlansStore } from "../../store/planStore";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const [plansFiltered, setPlansFiltered] = useState<List[]>([])
  const [forMe, setForMe] = useState<string>("")
  const { user: userStore, setIsLoged } = useUserStore()
  const{setPlan}=usePlansStore()


  const plansList = useGetPlans("https://rimac-front-end-challenge.netlify.app/api/plans.json")
  
  const ageUser = calculateAge(userStore.birthDay)

  useEffect(() => {
    const filter = plansList.list.filter(plan => Number(plan.age) <= ageUser)
    setPlansFiltered(filter)
    
  }, [plansList])

  const navegar = useNavigate()
  
  const handlePlan = (plan: List)=>{
    setPlan(plan)
    navegar("/resumen")

  }

  return (
    <div className="plan">
      <div className="plan-stepContentDesktop">
        <CirculeNumber number={1} isHere={true} />
        <p><strong>Planes y coberturas</strong></p>
        <p className="plan-stepContentDesktop-line">----</p>
        <CirculeNumber number={2} isHere={false} />
        <span>Resumen</span>
      </div>
      <div className="plan-back" onClick={()=> setIsLoged(false)}>
        <ButtonCircule  isActive={true} />
        <p>Volver</p>
      </div>
      <div className="plan-stepContent">
        <div className="plan-back-mobile" onClick={()=> setIsLoged(false)}>
          <ButtonCircule  isActive={false} />
        </div>
        <p>PASO 1 DE 2</p>
        <div className="plan-stepContent-stepvar">
          <div className="plan-stepContent-stepvar-step"></div>
        </div>
      </div>
        <hr />
     
      <div className="plan-info">
        <div className="plan-info-client">
            <h1>{userStore.name} ¿Para quién deseas cotizar?</h1>
            <span>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>

        <div className="plan-info-selectPlan">
            <PlanSelect
                onclick={()=> setForMe("forMe")}
                text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                src={`${import.meta.env.BASE_URL}assets/img/IcProtectionLight.png`}
                title="Para mí"
                isActive={forMe === "forMe"}
                
            />
            <PlanSelect
                onclick={()=> setForMe("forSomeoneelse")}
                text="Realiza una cotización para uno de tus familiares o cualquier persona."
                src={`${import.meta.env.BASE_URL}assets/img/IcAddUserLight.png`}
                title="Para alguien más"
                isActive={forMe === "forSomeoneelse"}
            />
        </div>

        <div className="plan-info-plans">
         {forMe === "forMe" && plansFiltered.map( (plan,index) => (
          <PlanTypeCard onclick={()=> handlePlan(plan)} iconSrc={plan.name.includes("Clínica") ? `${import.meta.env.BASE_URL}assets/img/IcHospitalLight.png` : `${import.meta.env.BASE_URL}assets/img/IcHomeLight.png` } planName={plan.name} price={String(plan.price )} descriptions={plan.description} key={index}/>
         ))}
            {forMe === "forSomeoneelse" && plansList.list.map((plan,index) =>(
              <PlanTypeCard onclick={()=> handlePlan({...plan, price: plan.price - (plan.price * 5 / 100)})} iconSrc={plan.name.includes("Clínica") ? `${import.meta.env.BASE_URL}assets/img/IcHospitalLight.png` :`${import.meta.env.BASE_URL}assets/img/IcHomeLight.png` } planName={plan.name} price={String(plan.price - (plan.price * 5 / 100))} descriptions={plan.description} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
