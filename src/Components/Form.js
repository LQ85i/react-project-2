import { Component } from "react";
import EducationBlock from "./EducationBlock";
import EmploymentBlock from "./EmploymentBlock";
import addIcon from "../images/add.svg"

class Form extends Component {

    handleChange = (e) => {
        e.preventDefault()
        const target = e.currentTarget;
        const value = target.value;
        const key = target.name;
        if (target.className === "btn-add-experience") {
            const section = target.parentNode.parentNode;
            if (section.id === "container-education") {
                this.props.addExperienceBlock("education");
            } else if (section.id === "container-employment") {
                this.props.addExperienceBlock("employment");
            }

        } else if (target.className === "btn-remove-experience") {
            const experience = target.parentNode;
            const section = experience.parentNode;
            const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
            if (section.id === "container-education") {
                this.props.updateStateOnFormChange("education", "experience-block", null, index);
            } else if (section.id === "container-employment") {
                this.props.updateStateOnFormChange("employment", "experience-block", null, index);
            }
        } else {
            const section = target.parentNode.parentNode.parentNode.parentNode;
            if (section.id === "container-contact") {
                this.props.updateStateOnFormChange("contact", key, value, null);
            } else if (section.id === "container-education") {
                const experience = target.parentNode.parentNode.parentNode
                const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
                this.props.updateStateOnFormChange("education", key, value, index);
            } else if (section.id === "container-employment") {
                const experience = target.parentNode.parentNode.parentNode
                const index = [...section.childNodes].indexOf(experience) - 2; // -1 because 0 is a title element
                this.props.updateStateOnFormChange("employment", key, value, index);
            }
        }


    }

    render() {
        const education = this.props.data.education;
        const educationBlocks = education.map((d, id) => <EducationBlock data={d} key={id} mode={this.props.mode} handleChange={this.handleChange} />);
        const employment = this.props.data.employment;
        const employmentBlocks = employment.map((d, id) => <EmploymentBlock data={d} key={id} mode={this.props.mode} handleChange={this.handleChange} />);
        return (
            <form id="cv-form">
                <div id="cv-container">
                    <div className="cv-section" id="container-contact">
                        <div className="cv-section-title">Contact information</div>
                        <div className="left-container">
                            <div className="cv-item" id="container-name">
                                <label className="title" htmlFor="fullName">Name:</label>
                                <div className="data-field">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="[Full name]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.contact.fullName}
                                    />
                                </div>
                            </div>
                            <div className="cv-item" id="container-email">
                                <label className="title" htmlFor="email">Email:</label>
                                <div className="data-field">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="[Email]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.contact.email}
                                    />
                                </div>
                            </div>
                            <div className="cv-item" id="container-phonenumber">
                                <label className="title" htmlFor="phoneNumber">Phone number:</label>
                                <div className="data-field">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="[Phone number]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.contact.phoneNumber}
                                    />
                                </div>
                            </div>
                            <div className="cv-item" id="container-applyingfor">
                                <label className="title" htmlFor="applyingFor">Applying for:</label>
                                <div className="data-field">
                                    <input
                                        type="text"
                                        name="applyingFor"
                                        placeholder="[Applying for]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.contact.applyingFor}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="right-container">
                            <img src={require("../images/img1.png")} alt="" />
                        </div>
                    </div>
                    <div className="cv-divider"></div>
                    <div className="cv-section" id="container-education">
                        <div className="cv-section-title">Education</div>
                        <div className="add-experience">
                            <button onClick={this.handleChange} className="btn-add-experience">
                                <img src={addIcon} alt="" />
                                <div className="title">Add education</div>
                            </button>
                        </div>
                        {educationBlocks}
                    </div>
                    <div className="cv-divider"></div>
                    <div className="cv-section" id="container-employment">
                        <div className="cv-section-title">Employment</div>
                        <div className="add-experience">
                            <button onClick={this.handleChange} className="btn-add-experience">
                                <img src={addIcon} alt="" />
                                <div className="title">Add experience</div>
                            </button>
                        </div>
                        {employmentBlocks}
                    </div>
                </div>
            </form >
        )
    }
}

export default Form;