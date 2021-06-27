import React from "react";
import "./style.css";

const Form = props => {
    return (
        <form>
            <br />
            <div className="form-group">
                <label className="BookSearchLabel"><h2>Park Search</h2></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Search Desired Park"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-dark" onClick={props.handleFormSubmit}>
                Enter
            </button>
        </form>
    )
}

export default Form;