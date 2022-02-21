import React from 'react';

class ClassComponent extends React.Component {
    // “The constructor for a React component is called before it is mounted. 
    // When implementing the constructor for a React.Component subclass, 
    // you should call super(props) before any other statement. Otherwise, 
    // this.props will be undefined in the constructor, which can lead to bugs.”
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
   
    render() {
      return (
        <div>
          <p>count: {this.state.count} times</p>
          <button onClick={() => 
            this.setState({ count: this.state.count + 1 })}>
            Click
          </button>
        </div>
      );
    }
   }

   export default ClassComponent;