import React from 'react';

// Handling state in functional components
const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    )
}

export default FunctionalComponent;