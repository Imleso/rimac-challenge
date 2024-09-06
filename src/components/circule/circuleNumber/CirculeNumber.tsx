import "./circuleNumber.scss"

interface CirculeNumberProps{
    number: number,
    isHere: boolean
}

const CirculeNumber = ({number, isHere}:CirculeNumberProps) => {
  return (
    <div className={isHere ? "circuleNumber-active" : "circuleNumber"}>{number}</div>
  )
}

export default CirculeNumber