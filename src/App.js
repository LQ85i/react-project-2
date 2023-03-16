import { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        contact: {
          fullName: '',
          email: '',
          phoneNumber: '',
          applyingFor: ''
        },
        education: [{
          schoolName: '',
          titleOfStudy: '',
          details: '',
          duration: []
        }],
        experience: [{
          companyName: '',
          positionTitle: '',
          mainTasks: '',
          details: '',
          duration: []
        }]
      }
    };
    this.setState = this.setState.bind(this);
    this.storeInformation = this.storeInformation.bind(this);
    this.changeToEditingMode = this.changeToEditingMode.bind(this);
  }
  storeInformation() {
    const contact = document.getElementById("contact-information");
    const fullName = contact.querySelector("#container-name .content").innerHTML;
    const email = contact.querySelector("#container-email .content").innerHTML;
    const phoneNumber = contact.querySelector("#container-phonenumber .content").innerHTML;
    const applyingFor = contact.querySelector("#container-applyfor .content").innerHTML;

    const contact_data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      applyingFor: applyingFor
    };

    const education = document.getElementById("container-education");
    const educations = education.querySelectorAll(".experience-block");
    let educations_data = [];
    for (let i = 0; i < educations.length; i++) {
      const experience_block = educations[i];
      const schoolName = experience_block.querySelector(".school-name").innerHTML;
      const titleOfStudy = experience_block.querySelector(".title-of-study").innerHTML;
      const details = experience_block.querySelector(".details").innerHTML;
      const duration = experience_block.querySelector(".duration").innerHTML.split(' - ');
      educations_data.push({
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        details: details,
        duration: duration
      })
    }

    const experience = document.getElementById("container-experience");
    const experiences = experience.querySelectorAll(".experience-block");
    let experiences_data = [];
    for (let i = 0; i < experiences.length; i++) {
      const experience_block = experiences[i];
      const companyName = experience_block.querySelector(".company-name").innerHTML;
      const positionTitle = experience_block.querySelector(".position-title").innerHTML;
      const mainTasks = experience_block.querySelector(".main-tasks").innerHTML;
      const details = experience_block.querySelector(".details").innerHTML;
      const duration = experience_block.querySelector(".duration").innerHTML.split(' - ');
      experiences_data.push({
        companyName: companyName,
        positionTitle: positionTitle,
        mainTasks: mainTasks,
        details: details,
        duration: duration
      })
      
    }

    this.setState({
      data: {
        contact: contact_data,
        education: educations_data,
        experience: experiences_data
      }
    });

  }
  changeToEditingMode() {
    this.storeInformation();
    // this.replaceViewWithForm();
  }

  render() {
    return (
      <div id="content" >
        <div id="main-title">CV Application</div>
        <div id="mode-container">
          <div id="mode-title">Viewing mode</div>
          <button id="mode-button" onClick={this.changeToEditingMode}>Go to editing mode</button>
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
          <div className="cv-section" id="container-education">
            <div className="cv-section-title">Education</div>
            <div className="experience-block">
              <div className="cv-date">
                <div className="content duration">2022-03 - present</div>
              </div>
              <div className="cv-item">
                <div className="content school-name header1">[school name]</div>
              </div>
              <div className="cv-item">
                <div className="content title-of-study header2">[title of study]</div>
              </div>
              <div className="cv-item">
                <div className="content details header3">[more details]</div>
              </div>
            </div>
          </div>
          <div className="cv-divider"></div>
          <div className="cv-section" id="container-experience">
            <div className="cv-section-title">Experience</div>
            <div className="experience-block">
              <div className="cv-date">
                <div className="content duration">2022-03 - present</div>
              </div>
              <div className="cv-item">
                <div className="content company-name header1">[company name]</div>
              </div>
              <div className="cv-item">
                <div className="content position-title header2">[position title]</div>
              </div>
              <div className="cv-item">
                <div className="content main-tasks header3">[main tasks]</div>
              </div>
              <div className="cv-item">
                <div className="content details header3">[more details]</div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }

}

export default App;
