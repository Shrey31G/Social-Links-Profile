import Descp from "./Descp";
import Heading from "./Heading";
import SocialButton from "./SocialButton";
import Subheading from "./Subheading";

export default function Card() {

    return (
    <div className=" p-10 rounded-lg flex flex-col items-center max-w-sm mx-auto"
    style={{ backgroundColor: 'hsl(0, 0%, 10.5%)' }}>
        <img src="/assets/images/avatar-jessica.jpeg" alt="Your Profile"
            className="rounded-full w-24 h-24 mb-4"
        />

       <div className="text-center">
       <Heading title={"Jessica Randall"} />
        <Subheading subTitle="London, United Kingdom" />
        <Descp describe={'"Front-end developer and avid reader."'} /></div> 

        <div className="flex flex-col gap-4 mt-6 w-full">
            <SocialButton title="GitHub" />
            <SocialButton title="Frontend Mentor" />
            <SocialButton title="LinkedIn" />
            <SocialButton title="Twitter" />
            <SocialButton title="Instagram" />
        </div>
    </div>
    )
}