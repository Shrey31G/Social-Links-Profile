
interface ButtonProp {
    title: string;
}

export default function SocialButton({title}: ButtonProp) {
    return (
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-600 font-semibold">
            {title}
        </button>
    )
}