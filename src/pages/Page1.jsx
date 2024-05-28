import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import UserCard from './UserCard'; // Ensure this path is correct based on your file structure

export const Page1 = () => {
    const { page, totalPages, getData, getInputPage, getNextPage, getPrevPage } = useGlobalContext();
    const [value, setValue] = useState(page + 1);
    const [startRange, setStartRange] = useState(1);

    const handleChange = (e) => {
        const number = parseInt(e.target.value, 10);
        if (number < 1 || number > totalPages) {
            alert("Please enter a number between 1 and 100");
        } else {
            setValue(number);
        }
    };

    const handlePageClick = (num) => {
        setValue(num);
    };

    const generatePageButtons = () => {
        const buttons = [];
        for (let i = startRange; i < startRange + 5 && i <= totalPages; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePageClick(i)} className={`px-3 py-1 mx-1 rounded ${i === value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    useEffect(() => {
        getInputPage(value - 1);
    }, [value]);

    useEffect(() => {
        if (value > startRange + 4) {
            setStartRange(value);
        } else if (value < startRange) {
            setStartRange(Math.max(1, value - 4));
        }
    }, [value]);

    return (
        <div className='flex flex-col items-center w-full p-4 bg-gray-100 font-mono text-gray-800'>
            <div className='flex justify-center items-center gap-2 mb-4'>
                <button onClick={getPrevPage} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
                {generatePageButtons()}
                <input type="number" onChange={handleChange} value={value} className="px-2 py-1 mx-2 rounded border border-gray-300" />
                <button onClick={getNextPage} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                {getData.map(user => (
                    <UserCard key={user.ID} user={user} />
                ))}
            </div>
        </div>
    );
};
