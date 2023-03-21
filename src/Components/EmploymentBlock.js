import { Component } from "react";
import deleteIcon from "../images/delete.svg"

class ExperienceBlock extends Component {

    viewOrEditBlock() {
        if (this.props.mode === "view") {
            return <div className="experience-block" id={this.props.data.id}>
                <div className="cv-date">
                    <div className="data-field duration">{this.props.data.duration[0]} - {this.props.data.duration[1]}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field company-name header1">{this.props.data.companyName}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field position-title header2">{this.props.data.positionTitle}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field main-tasks header3">{this.props.data.mainTasks}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field details header3">{this.props.data.details}</div>
                </div>
            </div>
        } else if (this.props.mode === "edit") {
            return <div className="experience-block" id={this.props.data.id}>
                <button
                    onClick={this.props.handleChange}
                    className="btn-remove-experience">
                    <img src={deleteIcon} alt="" />
                </button>
                <div className="cv-date">
                    <div className="data-field duration">
                        <input
                            type="text"
                            name="durationFrom"
                            placeholder="[from]"
                            onChange={this.props.handleChange}
                            className="duration-input"
                            defaultValue={this.props.data.duration[0]}
                        /> -
                        <input
                            type="text"
                            name="durationUntil"
                            placeholder="[until]"
                            onChange={this.props.handleChange}
                            className="duration-input"
                            defaultValue={this.props.data.duration[1]}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field company-name header1">
                        <input
                            type="text"
                            name="companyName"
                            placeholder="[Company name]"
                            onChange={this.props.handleChange}
                            className="text-input"
                            defaultValue={this.props.data.companyName}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field position-title header2">
                        <input
                            type="text"
                            name="positionTitle"
                            placeholder="[Position title]"
                            onChange={this.props.handleChange}
                            className="text-input"
                            defaultValue={this.props.data.positionTitle}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field main-tasks header3">
                        <textarea
                            rows="3" cols="48"
                            name="mainTasks"
                            placeholder="[Main tasks]"
                            onChange={this.props.handleChange}
                            className="text-input"
                            defaultValue={this.props.data.mainTasks}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field details header3">
                        <textarea
                            rows="3" cols="48"
                            name="details"
                            placeholder="[more details]"
                            onChange={this.props.handleChange}
                            className="text-input"
                            defaultValue={this.props.data.details}
                        />
                    </div>
                </div>
            </div>
        }

    }

    render() {
        return (
            <>
                {this.viewOrEditBlock()}
            </>
        )
    }
};

export default ExperienceBlock

