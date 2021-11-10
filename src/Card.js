import React from 'react';

const Card = ({cardIndex, data}) => {
    return (
        <div>
            {data[cardIndex].map(item => (
                <div className="Card">
                <p> {item.title} </p>
                <p> {item.name} </p>
        </div>
        
            ))}

        

        </div>
    );
};

export default Card;
