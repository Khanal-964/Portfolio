import React, { Children } from 'react';
import './State.css';
const State1 = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
        <div className="counter-box">
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
        <ChildrenComponent  count={count} />
        </>
    );

}
export default State1;

function ChildrenComponent({ count }) {
    console.log("This is child component");
    return (
        <div className='counter-box '>
            <h3>Child component {count}</h3>
        </div>
    );
}
// function SiblingComponent() {
//     console.log("This is sibling component");
//     return (
//         <div className='counter-box '>
//             <h3>Sibling component</h3>
//         </div>
//     );
// }
// export { SiblingComponent };