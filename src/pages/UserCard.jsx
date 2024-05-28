import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="flex flex-col items-start p-4 m-2 bg-white rounded shadow-lg hover:bg-gray-200 cursor-pointer w-70 h-70">
            <h2 className="text-xl font-bold mb-2">{user.FirstNameLastName}</h2>
            <p className="text-gray-700 mb-1">{user.JobTitle}</p>
            <p className="text-gray-700 mb-1">{user.Company}</p>
            <p className="text-gray-500 mb-1">{user.Email}</p>
            <p className="text-gray-500">{user.Phone}</p>
        </div>
    );
};

export default UserCard;
