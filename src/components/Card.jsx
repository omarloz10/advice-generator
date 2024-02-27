import ImageMobile from "../assets/images/pattern-divider-mobile.svg";
import ImageDestokp from "../assets/images/pattern-divider-desktop.svg";
import Icon from "../assets/images/icon-dice.svg";


export default function Card({ id, advice, changeAdvice }) {
    return (
        <div
            className="bg-DarkGrayishBlue rounded-[25px] h-72 relative m-1 sm:w-[512px]
"
        >
            <div className="text-[12px] text-center p-7">
                <h2 className=" text-NeonGreen font-Manrope tracking-[3px]">
                    ADVICE #{id}
                </h2>
            </div>
            <div className="mx-4 mb-10 h-28">
                <p className="text-center text-[18px] text-LightCyan font-Manrope">
                    "{advice}"
                </p>
            </div>
            <picture className="flex justify-center">
                <source media="(max-width: 375px )" srcSet={ImageMobile} sizes="" />
                <source media="(min-width: 768px )" srcSet={ImageDestokp} sizes="" />
                <img src={ImageMobile} alt="" />
            </picture>
            <div className="flex justify-center items-center">
                <button
                    className="bg-NeonGreen w-25 h-25 mt-5 p-4 rounded-full
         cursor-pointer absolute bottom-[-27px]"
                    onClick={changeAdvice}
                >
                    <img src={Icon} alt="Generate Advice" />
                </button>
            </div>
        </div>
    );
}
