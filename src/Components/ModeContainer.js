import { Component } from "react";


class ModeContainer extends Component {

    render() {
        return (
            <div id="mode-container">
                <div id="mode-title">Viewing Mode</div>
                <button id="mode-button" onClick={this.props.changeMode}>Go to Editing Mode</button>
            </div>
        )
    }
}

export default ModeContainer;