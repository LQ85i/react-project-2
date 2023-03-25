
const ModeContainer = (passedProps) => {
    const {changeMode} = passedProps;

    return (
        <div id="mode-container">
            <div id="mode-title">Viewing Mode</div>
            <button id="mode-button" onClick={changeMode}>Go to Editing Mode</button>
        </div>
    )

}

export default ModeContainer;