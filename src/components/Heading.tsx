
interface HeadingProps {
    title: string;
}

export default function Heading({ title }: HeadingProps) {
    return <div className="text-white font-medium" >
        <h1 className="text-3xl">
        {title}
        </h1>
    </div>
}