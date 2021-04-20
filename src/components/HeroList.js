import React from 'react';
// import {Router} from 'react-router-dom'
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
    return (
        <div className="review-list">
            <hr/>
            <ul>
                {heros.map(Body)}
            </ul>   
        </div>
        
    );
};

export default HeroList;