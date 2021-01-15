'use strict';

const f = React.createElement;

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: false };
  }

  render() {
    if (this.state.color) {
      return 'Color changed.';
    }

    return f(
      'button',
      { onClick: () => this.setState({ color: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#change_color');
ReactDOM.render(f(ChangeColor), domContainer);