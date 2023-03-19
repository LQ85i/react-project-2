import { Component } from "react";

class View extends Component {

    render() {
        return (
            <div id="cv">
                <div id="cv-container">
                    <div className="cv-section" id="container-contact">
                        <div className="cv-section-title">Contact information</div>
                        <div className="left-container">
                            <div className="cv-item" id="container-name">
                                <div className="title">Name:</div>
                                <div className="data-field">{this.props.data.contact.fullName}</div>
                            </div>
                            <div className="cv-item" id="container-email">
                                <div className="title">Email:</div>
                                <div className="data-field">{this.props.data.contact.email}</div>
                            </div>
                            <div className="cv-item" id="container-phonenumber">
                                <div className="title">Phone number:</div>
                                <div className="data-field">{this.props.data.contact.phoneNumber}</div>
                            </div>
                            <div className="cv-item" id="container-applyingfor">
                                <div className="title">Applying for:</div>
                                <div className="data-field">{this.props.data.contact.applyingFor}</div>
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
                                <div className="data-field duration">{this.props.data.education[0].duration[0]} - {this.props.data.education[0].duration[1]}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field school-name header1">{this.props.data.education[0].schoolName}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field title-of-study header2">{this.props.data.education[0].titleOfStudy}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field details header3">{this.props.data.education[0].details}</div>
                            </div>
                        </div>
                    </div>
                    <div className="cv-divider"></div>
                    <div className="cv-section" id="container-experience">
                        <div className="cv-section-title">Experience</div>
                        <div className="experience-block">
                            <div className="cv-date">
                                <div className="data-field duration">{this.props.data.experience[0].duration[0]} - {this.props.data.experience[0].duration[1]}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field company-name header1">{this.props.data.experience[0].companyName}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field position-title header2">{this.props.data.experience[0].positionTitle}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field main-tasks header3">{this.props.data.experience[0].mainTasks}</div>
                            </div>
                            <div className="cv-item">
                                <div className="data-field details header3">{this.props.data.experience[0].details}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default View;