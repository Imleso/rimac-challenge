import { useRef, useState } from 'react'
import { FieldValues } from "react-hook-form";
import './select.scss'

interface SelectecProps {
  defaultValue?: string;
  placeHolder?: string;
  name: string;
  hookForm: FieldValues;
}

export const Select = ({defaultValue = '', placeHolder = '', name, hookForm}: SelectecProps) => {

  const ulRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>(defaultValue)

  const { register, setValue } = hookForm

  const open = () => {
    const ulHeight = ulRef.current?.offsetHeight;
    const container = containerRef.current;

    const height = ulHeight || 0;

    if(ulRef && container){
      container.style.height = 56 + height + 'px';
      setIsOpen(true)
    }
  }

  const close = () => {
    const container = containerRef.current;

    if(container){
      container.style.height = 56 + 'px';
      setIsOpen(false)
    }
  }

  const handleToggle = () => {
    if(!isOpen){
      open()
      return 
    }
    close()
  }

  const handleSelect = (value: string) => {
    handleToggle()
    setSelected(value)
    setValue(value)
  }

  return (
    <div className={`select ${isOpen ? 'is-open' :''}`}>
        <div className="box" style={{height:'56px'}} ref={containerRef}>
            <input type="hidden" name={name} {...register(name)}/>
            <div onClick={()=> handleToggle()}>
                {
                  (selected || defaultValue.trim())|| placeHolder
                }
            </div>
            <ul className='select-options' ref={ulRef}>
                <li onClick={() => handleSelect('DNI')}>DNI</li>
                <li onClick={() => handleSelect('RUC')}>RUC</li>
                <li onClick={() => handleSelect('CE')}>CE</li>
            </ul>
        </div>
    </div>
  )
}
