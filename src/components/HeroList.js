import React from 'react';

const Body = ({id, name, power}) => {
    return (
       <div key={id}>
           NAME: {name}
           <br/>
           POWER: {power}
       </div> 
    )
}

const HeroList = ({heros}) => {
    // debugger
    return (
        <div className="review-list">
            <ul>
                {heros.map(Body)}
            </ul>
        </div>
    );
};

export default HeroList;