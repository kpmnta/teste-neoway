import React from "react";
import './styles.css'

const Loading = () => {
    return (
        <div className="container__loading">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading;