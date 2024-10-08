import "./button.scss" 

interface ButtonProps {
  onClick?: ()=> void,
  variant?: 'red' | 'black',
  text: string,
  type?: 'button' | 'submit'
}

export const Button = ({onClick = () => {}, variant = 'red', text, type = 'button'}: ButtonProps) => {
  return (
    <button type={type} className={`button is--${variant}`} onClick={onClick}>{text}</button>
  )
}