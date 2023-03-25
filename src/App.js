import { useState } from "react";
import View from "./Components/View.js"
import Form from "./Components/Form.js"
import ModeContainer from "./Components/ModeContainer.js"
import uniqid from "uniqid";
import './styles/styles.css'


const App = () => {
  const [state, setState] = useState({
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
  });



  const updateStateOnFormChange = (category, key, value, index) => {
    let contact_data = state.data.contact;
    let education_data = state.data.education;
    let employment_data = state.data.employment;
    let mode = state.mode;
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
    setState({
      data: {
        contact: contact_data,
        education: education_data,
        employment: employment_data
      },
      mode: mode
    })
  }

  const addExperienceBlock = (type) => {
    let contact_data = state.data.contact;
    let education_data = state.data.education;
    let employment_data = state.data.employment;
    let mode = state.mode;
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
    setState({
      data: {
        contact: contact_data,
        education: education_data,
        employment: employment_data
      },
      mode: mode
    })
  }


  const changeModeContainer = () => {
    if (state.mode === "view") {
      document.getElementById("cv").classList.remove("view-mode");
      const elemModeTitle = document.getElementById("mode-title");
      elemModeTitle.innerHTML = "Editing Mode"
      const elemModeButton = document.getElementById("mode-button");
      elemModeButton.innerHTML = "Save changes"
    } else if (state.mode === "edit") {
      document.getElementById("cv-form").classList.add("view-mode");
      const elemModeTitle = document.getElementById("mode-title");
      elemModeTitle.innerHTML = "Viewing Mode"
      const elemModeButton = document.getElementById("mode-button");
      elemModeButton.innerHTML = "Go to Editing Mode"
    }
  }

  const changeMode = () => {
    if (state.mode === "view") {
      changeModeContainer();
      setState(prevState => {
        let state = { ...prevState };
        state.mode = "edit";
        return state
      })
    } else if (state.mode === "edit") {
      changeModeContainer();
      setState(prevState => {
        let state = { ...prevState };
        state.mode = "view";
        return state
      })
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const target = e.currentTarget;
    const value = target.value;
    const key = target.name;
    if (target.className === "btn-add-experience") {
      const section = target.parentNode.parentNode;
      if (section.id === "container-education") {
        addExperienceBlock("education");
      } else if (section.id === "container-employment") {
        addExperienceBlock("employment");
      }

    } else if (target.className === "btn-remove-experience") {
      const experience = target.parentNode;
      const section = experience.parentNode;
      const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
      if (section.id === "container-education") {
        updateStateOnFormChange("education", "experience-block", null, index);
      } else if (section.id === "container-employment") {
        updateStateOnFormChange("employment", "experience-block", null, index);
      }
    } else {
      const section = target.parentNode.parentNode.parentNode.parentNode;
      if (section.id === "container-contact") {
        updateStateOnFormChange("contact", key, value, null);
      } else if (section.id === "container-education") {
        const experience = target.parentNode.parentNode.parentNode
        const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
        updateStateOnFormChange("education", key, value, index);
      } else if (section.id === "container-employment") {
        const experience = target.parentNode.parentNode.parentNode
        const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
        updateStateOnFormChange("employment", key, value, index);
      }
    }
  }

  const formOrView = () => {
    if (state.mode === "view") {
      return <View props={state} />
    } else if (state.mode === "edit") {
      return <Form
        props={state}
        handleChange={handleChange}
      />
    }
  }


  return (
    <div id="main-container">
      <div id="main-title">CV Application</div>
      <ModeContainer changeMode={changeMode} />
      {formOrView()}
    </div>
  );


}

export default App;
