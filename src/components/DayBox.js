import { useEffect } from "react";


function DayBox(props) {
    useEffect(() => {
        console.log(props.data)

    }, [])
    return (
        <div onClick={() => { props.onClick(props.data.day, true) }}
            onDoubleClick={() => { props.onClick(props.data.day, false) }}
            className={"box " + (props.data.crossed ? "cross" : "")}>
            <div className="day">
                {props.data.day}
            </div>
            <div className="stickToBottom">
                {props.data.date}
            </div>
        </div>)


}

export default DayBox;