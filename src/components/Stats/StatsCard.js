import React from 'react'


const StatsCard = ({title,quantity}) => {
    return (
        <div className="col-md-3 m-4 text-center" style={{maxWidth: "16rem" ,background: "white", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <div className="row">
          <div className="col-md-12 p-3" style={{alignSelf: "center", fontFamily: "Poppins", fontWeight: "700", color: "#656565"}}>
            {title}
            </div>
        </div>
        <hr style={{margin: "0", padding: "0"}}/>
        <div className="row">
        <div className="col-md-12 p-2">
            {quantity}
            </div>
        </div>
      </div>
    )
}

export default StatsCard
