import React from 'react';

const asyncComponent = importComponent => class AsyncComponentClass extends React.Component {
  constructor() {
    super();
    this.state = { component: null };
  }

  componentDidMount() {
    importComponent().then(cmp => this.setState({ component: cmp.default }));
  }

  render() {
    const { component: C } = this.state;
    return C ? <C {...this.props} /> : null;
  }
};

export default asyncComponent;
