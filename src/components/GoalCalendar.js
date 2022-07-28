import { add } from "date-fns";
import { useEffect, useState } from "react";
import DayBox from "./DayBox";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { addDays } from 'date-fns';


function GoalCalendar(props) {

    const [state, setState] = useState([]);

    useEffect(() => {
        getSavedData();
    }, []);

    const saveState = () => {
        localStorage.setItem("data", JSON.stringify(state))
    }

    function getSavedData() {
        var jsonString = localStorage.getItem("data");
        if (jsonString) {
            var data = JSON.parse(jsonString);
            console.log(data)

            setState(data)
        }
        else {
            prepareData();
        }
    }
    const handleDayClick = (day, flg) => {
        var index = state.findIndex(it => it.day == day)
        var data = [...state];
        data[index].crossed = flg;
        setState(data);
        saveState();

    }

    const prepareData = function () {

        var currentDate = new Date();
        var data = [];
        for (var i = 0; i < 60; i++) {
            var xx = format(currentDate, 'dd/MM/yyyy')
            data.push({ day: i + 1, crossed: false, date: xx });
            currentDate = addDays(currentDate, 1)

        }

        setState(data);
    }

    return (
        <div>
            <div className="flex-container">
                {state && state.length > 0 && state.map(((it, index) => {

                    return <DayBox onClick={handleDayClick} data={it} ></DayBox>

                }))}


            </div>


        </div>)


}

export default GoalCalendar;