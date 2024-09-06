import { FieldValues } from "react-hook-form";
import './checkbox.scss'

interface CheckboxProps {
    hookForm: FieldValues;
    name: string;
    text?: string;
}

export const Checkbox = ({hookForm, name, text = ''}: CheckboxProps) => {

  const { register, setValue, watch, formState: {errors}} = hookForm

  const checkValue = watch(name)

  const handleCheck = () => {
      setValue(name, !checkValue)
  }

  return (
    <div className='checkbox'>
        <input type="checkbox" {...register(name,{ required: 'error'})}/>
        <div className="square" onClick={handleCheck}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={10}
            fill="none"
          >
            <path
              fill="#fff"
              d="M4.5 9.415.795 5.705l1.41-1.41L4.5 6.585l6.045-6.04 1.41 1.41L4.5 9.415Z"
            />
          </svg>

        </div>

        <label className={errors[name] ? 'error' :''}>{text}</label>
    </div>
  )
}
