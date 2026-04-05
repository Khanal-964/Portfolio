import React, { useState } from "react";
// const users =[
//     {name: "John Doe", age: 30},
//     {name: "Jane Smith", age: 25},
//     {name: "Alice Johnson", age: 28},
//     {name: "Bob Brown", age: 35},
//     {name: "Charlie Davis", age: 32}
// ];
const DerivedState = () => {

    const [users, setUsers] = useState([
    {name: "John Doe", age: 30},
    {name: "Jane Smith", age: 25},
    {name: "Alice Johnson", age: 28},
    {name: "Bob Brown", age: 35},
    {name: "Charlie Davis", age: 32}
    ]);


    const Usercount=users.length;
    const AverageAge= users.reduce((acc, cur)=> acc + cur.age, 0) / users.length;
    return (
        <div className="counter-box">
            <h2>Users List 
            </h2>
            <ul>
                {
                    users.map((CurElem, index) => {
                        return(
                            <>
                        <li key={index}>
                            {CurElem.name} - {CurElem.age} Year Old.
                        </li>
                            </>
                        );
                    })
                }
            </ul>
            <p>Total Users: {Usercount}</p>
            <p>Average Age: {AverageAge.toFixed(2)}</p>
        </div>
    );
}

export default DerivedState;
