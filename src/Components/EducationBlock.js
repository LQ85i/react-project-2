import deleteIcon from "../images/delete.svg"

const EducationBlock = (passedProps) => {

    const { data, id, mode, handleChange } = passedProps;

    const viewOrEditBlock = () => {
        if (mode === "view") {
            return <div className="experience-block" id={id}>
                <div className="cv-date">
                    <div className="data-field duration">{data.duration[0]} - {data.duration[1]}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field school-name header1">{data.schoolName}</div>
                </div>
                <div className="cv-item">
                    <div className="data-field title-of-study header2">{data.titleOfStudy}</div>
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
                        />
                        -
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
                    <div className="data-field school-name header1">
                        <input
                            type="text"
                            name="schoolName"
                            placeholder="[School name]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.schoolName}
                        />
                    </div>
                </div>
                <div className="cv-item">
                    <div className="data-field title-of-study header2">
                        <input
                            type="text"
                            name="titleOfStudy"
                            placeholder="[Title of Study]"
                            onChange={handleChange}
                            className="text-input"
                            defaultValue={data.titleOfStudy}
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

export default EducationBlock