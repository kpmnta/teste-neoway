import React, {useState} from "react";
import './styles.css'

const OrderBy = ({data, setData}) => {

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => {
            return a.author > b.author ? 1 : -1
        })
        setData(sortedData)
    }
    return(
        <>
            <button className="button__orderby" onClick={handleSort}>Order by Author</button>
        </>
    );
}

export default OrderBy;