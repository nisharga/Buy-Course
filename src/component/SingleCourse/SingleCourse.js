import React from 'react';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const {img, title, by, cost, hour, view} = props.val
    return (
        <div className="singleCourse">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="other">
                <h2>{title}</h2>
<p>By: <b>{by}</b> || Views: <b>{view}</b> || Total Hour: <b>{hour}</b></p>
                <h1>${cost}</h1>
             <button className="btn btn-primary" 
             onClick={() => props.handle(props.val)}> 
             Enroll Now</button>
            </div>
        </div>
    );
};

export default SingleCourse;