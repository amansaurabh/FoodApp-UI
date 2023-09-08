import React from 'react';
import { bigMeal1, logo } from "../assets";
import Button from "../components/Button";

const Hero = () => {
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col-reverse justify-center min-h-screen max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-md:items-center max-xl:padding-x pt-[70px]">
                <h1 className='mt-10 text-primary font-source text-4xl max-sm:text-[38px] max-sm:leading-[46px] font-bold max-md:text-center'>
                    <span className='xl:whitespace-nowrap relative z-10 pr-10 max-sm:text-center'>
                        Discover the
                    </span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Best</span> Food
                    <br />and Drinks
                </h1>
                <p className='font-open text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-md:text-center'>
                    Naturally made Healthcare Products for the better care & support of your body.
                </p>
                <Button label="Explore now" />
            </div>
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-cover bg-center">
                <div className="max-w-[735px] p-0 m-0 max-sm:w-[391px] max-sm:h-[413.72px]">
                    <img
                        src={bigMeal1}
                        alt="main meal"
                        width={735}
                        height={804}
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
