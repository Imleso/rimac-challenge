import { FieldValues } from "react-hook-form"
import { Input } from '../Input/Input'
import { Select } from '../select/Select'
import './SelectGroup.scss'

interface SelectGoupProps {
    hookForm: FieldValues;
    inputName: string;
    inputPlaceHolder: string;
}

export const SelectGroup = ({hookForm, inputName, inputPlaceHolder}:SelectGoupProps) => {
  return (
    <div className='select-group'>
        <Select placeHolder="Documento" hookForm={hookForm} name="document" defaultValue="DNI" />
        <Input hookForm={hookForm} name={inputName} placeHolder={inputPlaceHolder} id="1312" type="number" maxDigit={7}/>
    </div>
  )
}
