import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    hookForm: FieldValues;
    placeHolder: string;
    name: string;
    className?: string;
    maxDigit?: number | string;
}

export const Input = ({hookForm = { formState: { errors: {} }},placeHolder, name, className, maxDigit, ...rest}:InputProps) => {

    const { register, formState: {errors}, setValue } = hookForm

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
     
        if(maxDigit){
            if(value.length > 5 && maxDigit) {
                setValue(name, value.slice(0, Number(maxDigit)), { shouldValidate: true });
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(rest.type !== 'number'){ 
            return
        }

        const notAllowKeys = ['e', 'E', '+', '-', ' ','.'];

        if (notAllowKeys.includes(e.key)) {
            e.preventDefault();
        }
    };

  return (
    <div className="input" >
        <div className={`box ${className ? className:''} ${errors[name] ?'is-error' :''}`}>
            <input id={rest.id} type="text" {...register(name)} placeholder="" {...rest} onChange={handleChange} onKeyDown={handleKeyDown}/>
            <label htmlFor={rest.id}>{placeHolder}</label>
        </div>
        {
            errors[name] && 
                <span className="input-span">{errors[name].message}</span>
        }
    </div>

  )
}
