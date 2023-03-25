import deleteIcon from "../images/delete.svg"

const ExperienceBlock = (passedProps) => {

    const { data,id,mode, handleChange } = passedProps;

    const viewOrEditBlock = () => {
        if (mode === "view") {
            return <div className="experience-block" id={id}>
                <div className="cv-date">
                    <div className="data-field duration">{data.duration[0]} - {data.duration[1]}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field company-name header1">{data.companyName}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field position-title header2">{data.positionTitle}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field main-tasks header3">{data.mainTasks}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field details header3">{data.details}</div>
                </div>
            </div>
        } else if (mode === "edit") {
            return <div className="experience-block" id={id}>
                <button
                    onClick={handleChange}
                    className="btn-remove-experience">
                    <img src={deleteIcon} alt="" />
                </button>
                <div className="cv-date">
                    <div className="data-field duration">
                        <input
                            type="text"
                            name="durationFrom"
                            placeholder="[from]"
                            onChange={handleChange}
                            className="duration-input"
                            defaultValue={data.duration[0]}
                        /> -
                        <input
                            type="text"
                            name="durationUntil"
                            placeholder="[until]"
                            onChange={handleChange}
                            className="duration-input"
                            defaultValue={data.duration[1]}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field company-name header1">
                        <input
                            type="text"
                            name="companyName"
                            placeholder="[Company name]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.companyName}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field position-title header2">
                        <input
                            type="text"
                            name="positionTitle"
                            placeholder="[Position title]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.positionTitle}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field main-tasks header3">
                        <textarea
                            rows="3" cols="48"
                            name="mainTasks"
                            placeholder="[Main tasks]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.mainTasks}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field details header3">
                        <textarea
                            rows="3" cols="48"
                            name="details"
                            placeholder="[more details]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.details}
                        />
                    </div>
                </div>
            </div>
        }

    }

    return (
        <>
            {viewOrEditBlock()}
        </>
    )

};

export default ExperienceBlock

