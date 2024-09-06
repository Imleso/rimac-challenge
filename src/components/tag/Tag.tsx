import "./tag.scss"

interface TagProps {
    text: string
}

export const Tag = ({text}:TagProps) => {
  return (
    <div className="tag">{text}</div>
  )
}