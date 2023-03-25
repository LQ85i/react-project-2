import EducationBlock from "./EducationBlock";
import EmploymentBlock from "./EmploymentBlock";
import addIcon from "../images/add.svg"

const Form = (passedProps) => {
    const { props, handleChange } = passedProps;

    const education = props.data.education;
    const educationBlocks = education.map((d, id) => <EducationBlock data={d} key={id} mode={props.mode} handleChange={handleChange} />);
    const employment = props.data.employment;
    const employmentBlocks = employment.map((d, id) => <EmploymentBlock data={d} key={id} mode={props.mode} handleChange={handleChange} />);
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
                                    onChange={handleChange}
                                    className="text-input"
                                    defaultValue={props.data.contact.fullName}
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
                                    onChange={handleChange}
                                    className="text-input"
                                    defaultValue={props.data.contact.email}
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
                                    onChange={handleChange}
                                    className="text-input"
                                    defaultValue={props.data.contact.phoneNumber}
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
                                    onChange={handleChange}
                                    className="text-input"
                                    defaultValue={props.data.contact.applyingFor}
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
                        <button onClick={handleChange} className="btn-add-experience">
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
                        <button onClick={handleChange} className="btn-add-experience">
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

export default Form;