import React from "react";

// function Greet(){
//     return <h1>Hello Vijender</h1>
// }


//without destructuring of props

// const Greet = (props) => {
//     console.log(props);
//     return (
//     <div>
//         <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//         {props.children}
//     </div>
//     )
// }


// with props destructuring

const Greet = ({name,heroName,children}) => {
    return (
    <div>
        <h1>Hello {name} a.k.a. {heroName}</h1>
        {children}
    </div>
    )
}

export default Greet;