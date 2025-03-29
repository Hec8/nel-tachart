interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="text-center mb-5 font-bold text-3xl">{title}</h1>
    )
}

export default Title