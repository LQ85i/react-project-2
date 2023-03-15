import { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.setState = this.setState.bind(this);
  }
  storeInformation() {
    console.log("store information");
    /*this.setState({
       data: newData,
    });*/
  }

  render() {
    return (
      <div id="content" >
        <div id="main-title">CV Application</div>
        <div id="mode-container">
          <div id="mode-title">Viewing mode</div>
          <button id="mode-button" onClick={this.storeInformation()}>Go to editing mode</button>
        </div>
        <div id="cv">
          <div className="cv-section" id="contact-information">
            <div className="cv-section-title">Contact information</div>
            <div className="left-container">
              <div className="cv-item" id="container-name">
                <div className="title">Name:</div>
                <div className="content">[Firstname Lastname]</div>
              </div>
              <div className="cv-item" id="container-email">
                <div className="title">Email:</div>
                <div className="content">[a@b.com]</div>
              </div>
              <div className="cv-item" id="container-phonenumber">
                <div className="title">Phone number:</div>
                <div className="content">[123-4567890]</div>
              </div>
              <div className="cv-item" id="container-applyfor">
                <div className="title">Applying for:</div>
                <div className="content">[Worker]</div>
              </div>
            </div>
            <div className="right-container">
              <img src={require("./images/img1.png")} alt="" />
            </div>
          </div>
          <div className="cv-divider"></div>
          <div className="cv-section" id="educational-experience">
            <div className="cv-section-title">Education</div>
            <div className="experience-block">
              <div className="cv-date">
                <div className="title">2022-03 - present</div>
              </div>
              <div className="cv-item">
                <div className="content header1">[school name]</div>
              </div>
              <div className="cv-item">
                <div className="content header2">[title of study]</div>
              </div>
              <div className="cv-item">
                <div className="content header3">[more details]</div>
              </div>
            </div>
          </div>
          <div className="cv-divider"></div>
          <div className="cv-section" id="practical-experience">
            <div className="cv-section-title">Employment</div>
            <div className="experience-block">
              <div className="cv-date">
                <div className="title">2022-03 - present</div>
              </div>
              <div className="cv-item">
                <div className="content header1">[company name]</div>
              </div>
              <div className="cv-item">
                <div className="content header2">[position title]</div>
              </div>
              <div className="cv-item">
                <div className="content header3">[main tasks]</div>
              </div>
              <div className="cv-item">
                <div className="content header3">[more details]</div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }

}

export default App;
