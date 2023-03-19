import { Component } from "react";

class Form extends Component {

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const key = target.name;
        const section = target.parentNode.parentNode.parentNode.parentNode;
        if (section.id === "container-contact") {
            this.props.updateStateOnFormChange("contact", key, value, null);
        } else if (section.id === "container-education") {
            const experience = target.parentNode.parentNode.parentNode
            const index = [...section.childNodes].indexOf(experience) - 1; // -1 because 0 is a title element
            this.props.updateStateOnFormChange("education", key, value, index);
        } else if (section.id === "container-experience") {
            const experience = target.parentNode.parentNode.parentNode
            const index = [...section.childNodes].indexOf(experience) - 1; // -1 because 0 is a title element
            this.props.updateStateOnFormChange("experience", key, value, index);
        }

    }

    render() {
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
                                        type="email"
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
                        <div className="experience-block">
                            <div className="cv-date">
                                <div className="data-field duration">
                                    <input
                                        type="text"
                                        name="durationFrom"
                                        placeholder="[from]"
                                        onChange={this.handleChange}
                                        className="duration-input"
                                        defaultValue={this.props.data.education[0].duration[0]}
                                    />
                                    -
                                    <input
                                        type="text"
                                        name="durationUntil"
                                        placeholder="[until]"
                                        onChange={this.handleChange}
                                        className="duration-input"
                                        defaultValue={this.props.data.education[0].duration[1]}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field school-name header1">
                                    <input
                                        type="text"
                                        name="schoolName"
                                        placeholder="[School name]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.education[0].schoolName}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field title-of-study header2">
                                    <input
                                        type="text"
                                        name="titleOfStudy"
                                        placeholder="[Title of Study]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.education[0].titleOfStudy}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field details header3">
                                    <textarea
                                        rows="3" cols="31"
                                        name="details"
                                        placeholder="[more details]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.education[0].details}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cv-divider"></div>
                    <div className="cv-section" id="container-experience">
                        <div className="cv-section-title">Experience</div>
                        <div className="experience-block">
                            <div className="cv-date">
                                <div className="data-field duration">
                                    <input
                                        type="text"
                                        name="durationFrom"
                                        placeholder="[from]"
                                        onChange={this.handleChange}
                                        className="duration-input"
                                        defaultValue={this.props.data.experience[0].duration[0]}
                                    /> - 
                                    <input
                                        type="text"
                                        name="durationUntil"
                                        placeholder="[until]"
                                        onChange={this.handleChange}
                                        className="duration-input"
                                        defaultValue={this.props.data.experience[0].duration[1]}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field company-name header1">
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="[Company name]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.experience[0].companyName}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field position-title header2">
                                    <input
                                        type="text"
                                        name="positionTitle"
                                        placeholder="[Position title]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.experience[0].positionTitle}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field main-tasks header3">
                                <textarea
                                        rows="3" cols="31"
                                        name="mainTasks"
                                        placeholder="[Main tasks]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.experience[0].mainTasks}
                                    />
                                </div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field details header3">
                                <textarea
                                        rows="3" cols="31"
                                        name="details"
                                        placeholder="[more details]"
                                        onChange={this.handleChange}
                                        className="text-input"
                                        defaultValue={this.props.data.experience[0].details}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;