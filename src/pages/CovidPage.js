import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import CovidCard from "./CovidCard";
import CovidLogo from '../images/image.png';
import {getCovidData} from "../redux/selectors/Covide-selector";

const CovidPage = (props) => {
    useEffect(() => {
        props.SetCovidDataThunk()
    }, []);

    if (props.CovidData.length === undefined) {
        return <div>Загрузка...</div>
    }

    return (
        <div className='container'>
            <div className='covid-logo'><img src={CovidLogo} alt="Covid logo"/></div>
            <div className='row'>
                {
                    props.CovidData.map(data =>
                        <div className='col s12 m4'>
                            <CovidCard data={data} />
                        </div>
                    )
                }



            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        CovidData: getCovidData(state)
    };
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)