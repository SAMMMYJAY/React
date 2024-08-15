import React from "react";

const ProfileCard = ({ name, title, image, age }) => {
return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{title}</p>
            <p className="px-6 py-4">{age}</p>
            </div>
        </div>
        );

};

export default ProfileCard;