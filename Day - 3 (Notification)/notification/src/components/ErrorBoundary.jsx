import React from "react"

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError() {
        return {hasError:true}
    }

    return = () => {
        this.setState({hasError:false})
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 20, color: "red" }}>
                    <h2>Something went wrong!</h2>
                    <button onClick={this.retry}>Retry</button>
                </div>
            );
        }
        return this.props.children;
    }
}