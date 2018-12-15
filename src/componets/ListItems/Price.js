import React from 'react'


export default (props) => {
        return (
        <div>
            { props.on_sale ? <span className="badge badge-danger mr-2 old">{props.regular_price}</span> : `` }
            <span className="badge badge-light">{props.actual_price}</span>
        </div> )

}