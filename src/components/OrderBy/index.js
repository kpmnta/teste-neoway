import React, {useState} from "react";
import './styles.css'

const OrderBy = ({data, setData}) => {

    const handleSort = (e) => {
        const sortedData = [...data].sort((a, b) => {
            return a[e.target.value] > b[e.target.value] ? 1 : -1
        })
        setData(sortedData)
    }
    return(
        <>
            <select className="button__orderby" onChange={handleSort}>
                <option value="" disabled selected>Select your option</option>
                <option value="author">Author</option>
                <option value="publishedAt">Date</option>
                <option value="title">Title</option>
            </select>
        </>
    );
}

export default OrderBy;