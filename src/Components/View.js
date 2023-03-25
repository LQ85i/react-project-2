import EducationBlock from "./EducationBlock";
import EmploymentBlock from "./EmploymentBlock";

const View = (passedProps) => {

    const { props } = passedProps;

    const education = props.data.education;
    const educationBlocks = education.map((d, id) => <EducationBlock data={d} key={id} mode={props.mode} />);
    const employment = props.data.employment;
    const employmentBlocks = employment.map((d, id) => <EmploymentBlock data={d} key={id} mode={props.mode} />);
    return (
        <div id="cv">
            <div id="cv-container">
                <div className="cv-section" id="container-contact">
                    <div className="cv-section-title">Contact information</div>
                    <div className="left-container">
                        <div className="cv-item" id="container-name">
                            <div className="title">Name:</div>
                            <div className="data-field">{props.data.contact.fullName}</div>
                        </div>
                        <div className="cv-item" id="container-email">
                            <div className="title">Email:</div>
                            <div className="data-field">{props.data.contact.email}</div>
                        </div>
                        <div className="cv-item" id="container-phonenumber">
                            <div className="title">Phone number:</div>
                            <div className="data-field">{props.data.contact.phoneNumber}</div>
                        </div>
                        <div className="cv-item" id="container-applyingfor">
                            <div className="title">Applying for:</div>
                            <div className="data-field">{props.data.contact.applyingFor}</div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img src={require("../images/img1.png")} alt="" />
                    </div>
                </div>
                <div className="cv-divider"></div>
                <div className="cv-section" id="container-education">
                    <div className="cv-section-title">Education</div>
                    {educationBlocks}
                </div>
                <div className="cv-divider"></div>
                <div className="cv-section" id="container-employment">
                    <div className="cv-section-title">Employment</div>
                    {employmentBlocks}
                </div>
            </div>
        </div>
    )
}

export default View;