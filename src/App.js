import { Component } from "react";
import View from "./Components/View.js"
import Form from "./Components/Form.js"
import ModeContainer from "./Components/ModeContainer.js"
import uniqid from "uniqid";


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
          duration: ["2022-03", "present"],
          id: uniqid()
        }],
        employment: [{
          companyName: '[Company name]',
          positionTitle: '[Position title]',
          mainTasks: '[Main tasks]',
          details: '[more details]',
          duration: ["2022-03", "present"],
          id: uniqid()
        }]
      },
      mode: "view"
    };
    this.setState = this.setState.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.updateStateOnFormChange = this.updateStateOnFormChange.bind(this);
    this.addExperienceBlock = this.addExperienceBlock.bind(this);
  }

  updateStateOnFormChange(category, key, value, index) {
    let contact_data = this.state.data.contact;
    let education_data = this.state.data.education;
    let employment_data = this.state.data.employment;
    let mode = this.state.mode;
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
      } else if (key === "experience-block") {
        education_data.pop(index);
      }
    } else if (category === "employment") {
      if (key === "companyName") {
        employment_data[index].companyName = value;
      } else if (key === "positionTitle") {
        employment_data[index].positionTitle = value;
      } else if (key === "mainTasks") {
        employment_data[index].mainTasks = value;
      } else if (key === "details") {
        employment_data[index].details = value;
      } else if (key === "durationFrom") {
        employment_data[index].duration[0] = value;
      } else if (key === "durationUntil") {
        employment_data[index].duration[1] = value;
      } else if (key === "experience-block") {
        employment_data.pop(index);
      }
    }
    this.setState({
      data: {
        contact: contact_data,
        education: education_data,
        employment: employment_data
      },
      mode: mode
    })
  }

  addExperienceBlock(type) {
    let contact_data = this.state.data.contact;
    let education_data = this.state.data.education;
    let employment_data = this.state.data.employment;
    let mode = this.state.mode;
    if (type === "education") {
      const newEducation = {
        schoolName: '[School name]',
        titleOfStudy: '[Title of study]',
        details: '[more details]',
        duration: ["2022-03", "present"],
        id: uniqid()
      };
      education_data.push(newEducation);
    } else if (type === "employment") {
      const newEmployment = {
        companyName: '[Company name]',
        positionTitle: '[Position title]',
        mainTasks: '[Main tasks]',
        details: '[more details]',
        duration: ["2022-03", "present"],
        id: uniqid()
      };
      employment_data.push(newEmployment);
    }
    this.setState({
      data: {
        contact: contact_data,
        education: education_data,
        employment: employment_data
      },
      mode: mode
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
      return <View data={this.state.data} mode={this.state.mode} />
    } else if (this.state.mode === "edit") {
      return <Form
        data={this.state.data}
        mode={this.state.mode}
        updateStateOnFormChange={this.updateStateOnFormChange}
        addExperienceBlock={this.addExperienceBlock}
      />
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
