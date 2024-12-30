
interface DescProps {
    describe: string;
}

export default function Descp({describe}: DescProps) {
    return (
        <div className='text-gray-300 whitespace-nowrap text-medium p-3 overflow-hidden text-ellipsis  '>
            {describe}
        </div>
    )
}