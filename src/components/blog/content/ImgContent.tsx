interface Props {
    img: string,
}

const ImgContent = ({ img }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
        <img src={img} className="lg:w-[360px] lg:h-full" />
    </div>
  )
}

export default ImgContent