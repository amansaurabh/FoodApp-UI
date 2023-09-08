

import { bigMeal2 } from "../assets"
import Button from "../components/Button"

const Services = () => {
    return (
        <section
            id="about-us"
            className="flex flex-row-reverse justify-between items-center max-lg:flex-col gap-10 max-h-full max-container"
        >
            <div className="flex flex-1 flex-col max-md:text-center max-md:items-center">
                <h2 className='font-poppins text-primary mt-10 text-4xl max-sm:text-2xl capitalize font-bold lg:max-w-lg'>
                    About Us
                </h2>
                <p className='font-source mt-4 lg:max-w-lg max-sm:text-xs max-sm:font-light'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                </p>
                <div className="mt-11 max-md:items-start">
                    <Button label="Read More" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center max-md:hidden">
                <img src={bigMeal2} alt="shoe8" width={384} height={468} className="object-contain" />
            </div>
        </section>
    )
}

export default Services

