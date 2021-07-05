import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Row, Col } from "../Grid";
import "./ParkInfo.css";


const ParkInfo = props => {

    // const [props, setData] = useState([])

    // useEffect( () => {

    //     API.getIndividualPark(props.parkCode)
    //     .then(res => {
    //         if (res.data.data === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         else {
    //             let results = res.data.data[0];
    //             setData(results);
    //             }
    //         }
    //     )
    // }, [])



    return (
        <div className = "m-2 p-2 rounded-3 half">
            <br></br>
            <Row className = "row" id = "parkName">
                <h1 className = "text-center">{props.name}</h1>
            </Row>
            <div className = "row">
            {props.images && props.images.splice(0,2).map((image) => {
                return <div className = "col-sm-6 col-md-6 col-lg-4 col-xl-5 p-1">
                    <img src = {image.url} alt = "mapped park" />
                </div>
            })}
            </div>

            <Row >
                <h3>Description: </h3>
                <p>{props.description && props.description}</p>
            </Row>

            <Row >
                <h3>Designation: </h3>
                <p>{props.designation}</p>
            </Row>

            <Row >
                <h3>Fees: </h3>
                {props.entranceFees && <p>${props.entranceFees[0].cost} - {props.entranceFees[0].description}</p>}
            </Row>

            <Row >
                <h3>Address: </h3>
                {props.addresses && <p>{props.addresses[0].line1}</p>}
                {props.addresses && <p>{props.addresses[0].city}, {props.addresses[0].stateCode} {props.addresses[0].postalCode}</p>}
            </Row>
            
            <Row >
                <h3>Weather Info: </h3>
                <p>{props.weatherInfo}</p>
            </Row>



            <Row >
                <h3>Operating Hours: </h3>
                {props.operatingHours && <p>Sunday: {props.operatingHours[0].standardHours.sunday}</p>}
                {props.operatingHours && <p>Monday: {props.operatingHours[0].standardHours.monday}</p>}
                {props.operatingHours && <p>Tuesday: {props.operatingHours[0].standardHours.tuesday}</p>}
                {props.operatingHours && <p>Wednesday: {props.operatingHours[0].standardHours.wednesday}</p>}
                {props.operatingHours && <p>Thursday: {props.operatingHours[0].standardHours.thursday}</p>}
                {props.operatingHours && <p>Friday: {props.operatingHours[0].standardHours.friday}</p>}
                {props.operatingHours && <p>Saturday: {props.operatingHours[0].standardHours.saturday}</p>}
                {props.operatingHours && <p>{props.operatingHours[0].description}</p>}
            </Row>


            <Row >
                <h3>Contact: </h3>
                <p>{props.contacts && <p>Phone Number: {props.contacts.phoneNumbers[0].phoneNumber} <br /> Email: <a href={`mailto:${props.contacts.emailAddresses[0].emailAddress}`}>{props.contacts.emailAddresses[0].emailAddress}</a></p>}</p>
            </Row>
        </div>
    )

}
export default ParkInfo;
