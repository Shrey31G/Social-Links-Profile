interface SubheadingProps {
    subTitle: string;
}

export default function Subheading({ subTitle }: SubheadingProps) {
    return (
        <div className="text-lime-500 font-bold">
            {subTitle}
        </div>
    )
}