
import { useForm } from 'react-hook-form'
import Tag from "../../components/tag/Tag"
import "./insured.scss"
import { Checkbox, Input, SelectGroup } from "../../components"
import Footer from "../../components/footer/Footer"
import { useGetUser } from "../../hooks"
import { useEffect } from "react"
import { useUserStore } from "../../store/userStore"
import { useNavigate } from "react-router-dom"
import Button from '../../components/button/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

export const Insured = () => {
  
  const navegar = useNavigate()
  const { setUser, setIsLoged } = useUserStore();
  const {data:user, getUser} = useGetUser("https://rimac-front-end-challenge.netlify.app/api/user.json");

  useEffect(() => {
    if(user != null){
      setUser(user)
    };
  }, [user,setUser]);
  
  const schema = object({
    document: string()
      .required('Nro. de documento requerido')
      .min(7, 'El mínimo es de 7 caracteres'),
    phone: string()
      .required('Nro. de Celular requerido')
      .min(9, 'El mínimo es de 9 caracteres'),
    privacy: string()
      .required('Username is required'),
    comercialy: string()
      .required('Username is required'),
  }).required();

  const hookform = useForm({
    resolver: yupResolver(schema),
  })
  
  const { handleSubmit, formState: {errors} } = hookform
  
  const onSubmit = () => {

    if (!Object.keys(errors).length) {
      getUser();
    }

    if (user != null) {
      setIsLoged(true)
      navegar("/planes")
    }
  }

  return (
    <div className="insured">
       <img className="insured-blur-green" src={`${import.meta.env.BASE_URL}assets/img/blur-asset.png`} alt="" />
       <img className="insured-blur-purple" src={`${import.meta.env.BASE_URL}/assets/img/blur-asset-purple.png`} alt="" />
        <div className="insured-content">
          <img className="insured-content-imgLarge" src={`${import.meta.env.BASE_URL}assets/img/familyImg.png`} alt="" />
          <div className="insured-content-info">
            <div className="insured-content-info-banner">
              <div className="insured-content-info-banner-text">
                <Tag text="Seguro Salud Flexible"/>
                <h1>Creado para ti y tu familia</h1>
              </div>
              <img src={`${import.meta.env.BASE_URL}assets/img/familyImg.png`} alt="" />
            </div>
            <hr />
            <div className="insured-content-info-form">

              <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</p>

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SelectGroup hookForm={hookform} inputName="document" inputPlaceHolder="Nro. de documento"/>
                  <Input hookForm={hookform} name="phone" placeHolder="Celular" id="2" type='number' maxDigit={9}/>
                  <div className='insured-content-info-form-checkbox'>
                    <Checkbox hookForm={hookform} name="privacy" text='Acepto la Politica de Privacidad'/>
                  </div>
                  <div className='insured-content-info-form-checkbox'>
                    <Checkbox hookForm={hookform} name="comercialy" text="Acepto la Politica de Comunicaciones Comerciales"/>
                  </div>

                  <label className='decorade'>Aplican Términos y Condiciones</label>

                  <Button text='Cotiza aquí' variant='black' type='submit' />
                </form>
              </div>
              
            </div>
          </div>
        </div>
        <div className="insured-footer">
          <Footer />
        </div>
    </div>
  )
}
