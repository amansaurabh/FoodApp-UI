
import React, { useState } from 'react';
import { carousel } from '../constants';
import Button from '../components/Button';
import { left, right } from '../assets';

const LatestArticle = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 3;
    const totalPages = Math.ceil(carousel.length / cardsPerPage);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = carousel.slice(indexOfFirstCard, indexOfLastCard);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="container mx-auto text-3xl mt-8 flex items-center flex-col">
            <div className='py-10'>
                <h2 className='text-center font-semibold text-primary'>Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {currentCards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[381px] h-[554px] max-sm:w-[271px] max-sm:h-[484px] bg-white py-5 px-6 rounded-2xl border-2 border-solid border-slate-200"
                    >
                        <img
                            src={card.imgUrl}
                            alt={`Image for ${card.title}`}
                            className="w-[326px] h-[257px] max-sm:w-[204px] max-sm:h-[166px] object-cover rounded-2xl"
                        />
                        <div className="flex flex-col justify-around w-[295px] h-[195px] max-sm:w-[300px] max-sm:h-[200px] max-sm:gap-5 py-4 px-5 max-sm:py-1">
                            <h2 className="font-bold font-poppins text-[19px] max-sm:text-base text-primary">{card.title}</h2>
                            <p className=" max-sm:w-[213px] max-sm:h-[106px]  text-gray-500 text-sm">{card.subTitle}</p>
                        </div>
                        <div className='px-4'>
                            <Button
                                label="Read More"
                                backgroundColor="bg-white"
                                borderColor="border-slate-gray"
                                textColor="text-slate-gray"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-5 space-x-4 pt-10">
                <button
                    onClick={handlePrevPage}
                    className={`w-[28px] h-[29px] px-2  rounded border-2 border-solid border-gray-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <img src={left} alt="left arrow" />
                </button>
                <span className='text-2xl'>{`Page ${currentPage} / ${totalPages}`}</span>
                <button
                    onClick={handleNextPage}
                    className={`w-[28px] h-[29px] px-2  rounded border-2 border-solid border-gray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <img src={right} alt="right arrow" />
                </button>
            </div>
        </div>
    );
};

export default LatestArticle;
