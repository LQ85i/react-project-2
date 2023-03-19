import { Component } from "react";
import View from "./Components/View.js"
import Form from "./Components/Form.js"
import ModeContainer from "./Components/ModeContainer.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        contact: {
          fullName: '[Firstname Lastname]',
          email: '[a@b.com]',
          phoneNumber: '[123-4567890]',
          applyingFor: '[Worker]'
        },
        education: [{
          schoolName: '[School name]',
          titleOfStudy: '[Title of study]',
          details: '[more details]',
          duration: ["2022-03", "present"]
        }],
        experience: [{
          companyName: '[Company name]',
          positionTitle: '[Position title]',
          mainTasks: '[Main tasks]',
          details: '[more details]',
          duration: ["2022-03", "present"]
        }]
      },
      mode: "view"
    };
    this.setState = this.setState.bind(this);
    this.storeInformation = this.storeInformation.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.updateStateOnFormChange = this.updateStateOnFormChange.bind(this);
  }
  storeInformation() {
    const contact = document.getElementById("container-contact");
    const fullName = contact.querySelector("#container-name .data-field").innerHTML;
    const email = contact.querySelector("#container-email .data-field").innerHTML;
    const phoneNumber = contact.querySelector("#container-phonenumber .data-field").innerHTML;
    const applyingFor = contact.querySelector("#container-applyingfor .data-field").innerHTML;
    const contact_data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      applyingFor: applyingFor
    };
    const education = document.getElementById("container-education");
    const educations = education.querySelectorAll(".experience-block");
    let education_data = [];
    for (let i = 0; i < educations.length; i++) {
      const experience_block = educations[i];
      const schoolName = experience_block.querySelector(".school-name").innerHTML;
      const titleOfStudy = experience_block.querySelector(".title-of-study").innerHTML;
      const details = experience_block.querySelector(".details").innerHTML;
      const duration = experience_block.querySelector(".duration").innerHTML.split(' - ');
      education_data.push({
        schoolName: schoolName,
        titleOfStudy: titleOfStudy,
        details: details,
        duration: duration
      })
    }

    const experience = document.getElementById("container-experience");
    const experiences = experience.querySelectorAll(".experience-block");
    let experience_data = [];
    for (let i = 0; i < experiences.length; i++) {
      const experience_block = experiences[i];
      const companyName = experience_block.querySelector(".company-name").innerHTML;
      const positionTitle = experience_block.querySelector(".position-title").innerHTML;
      const mainTasks = experience_block.querySelector(".main-tasks").innerHTML;
      const details = experience_block.querySelector(".details").innerHTML;
      const duration = experience_block.querySelector(".duration").innerHTML.split(' - ');
      experience_data.push({
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
        education: education_data,
        experience: experience_data
      }
    });

  }

  updateStateOnFormChange(category, key, value, index) {
    let contact_data = this.state.data.contact;
    let education_data = this.state.data.education;
    let experience_data = this.state.data.experience;
    if (category === "contact") {
      if (key === "fullName") {
        contact_data.fullName = value;
      } else if (key === "email") {
        contact_data.email = value;
      } else if (key === "phoneNumber") {
        contact_data.phoneNumber = value;
      } else if (key === "applyingFor") {
        contact_data.applyingFor = value;
      }
    } else if (category === "education") {
      if (key === "schoolName") {
        education_data[index].schoolName = value;
      } else if (key === "titleOfStudy") {
        education_data[index].titleOfStudy = value;
      } else if (key === "details") {
        education_data[index].details = value;
      } else if (key === "durationFrom") {
        education_data[index].duration[0] = value;
      } else if (key === "durationUntil") {
        education_data[index].duration[1] = value;
      }
    } else if (category === "experience") {
      if (key === "companyName") {
        experience_data[index].companyName = value;
      } else if (key === "positionTitle") {
        experience_data[index].positionTitle = value;
      } else if (key === "mainTasks") {
        experience_data[index].mainTasks = value;
      } else if (key === "details") {
        experience_data[index].details = value;
      } else if (key === "durationFrom") {
        experience_data[index].duration[0] = value;
      } else if (key === "durationUntil") {
        experience_data[index].duration[1] = value;
      }
    }
    this.setState({
      data: {
        contact: contact_data,
        education: education_data,
        experience: experience_data
      }
    })
  }


  changeModeContainer() {
    if (this.state.mode === "view") {
      document.getElementById("cv").classList.remove("view-mode");
      const elemModeTitle = document.getElementById("mode-title");
      elemModeTitle.innerHTML = "Editing Mode"
      const elemModeButton = document.getElementById("mode-button");
      elemModeButton.innerHTML = "Save changes"
    } else if (this.state.mode === "edit") {
      document.getElementById("cv-form").classList.add("view-mode");
      const elemModeTitle = document.getElementById("mode-title");
      elemModeTitle.innerHTML = "Viewing Mode"
      const elemModeButton = document.getElementById("mode-button");
      elemModeButton.innerHTML = "Go to Editing Mode"
    }
  }

  changeMode() {
    if (this.state.mode === "view") {
      this.storeInformation(); //callbacks with a function to change view to form
      this.changeModeContainer();
      this.setState({
        mode: "edit"
      })
    } else if (this.state.mode === "edit") {
      this.changeModeContainer();
      this.setState({
        mode: "view"
      })
    }
  }

  formOrView() {
    if (this.state.mode === "view") {
      return <View data={this.state.data} />
    } else if (this.state.mode === "edit") {
      return <Form data={this.state.data} updateStateOnFormChange={this.updateStateOnFormChange} />
    }
  }

  render() {
    return (
      <div id="main-container">
        <div id="main-title">CV Application</div>
        <ModeContainer changeMode={this.changeMode} />
        {this.formOrView()}
      </div>);
  }

}

export default App;
