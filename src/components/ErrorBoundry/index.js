import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
