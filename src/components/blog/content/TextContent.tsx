interface Props {
    text: string
}

const TextContent = ({ text }: Props) => {
  return (
    <p className="lg:text-2xl text-xl lg:leading-[3.2rem] leading-10">{text}</p>
  )
}

export default TextContent