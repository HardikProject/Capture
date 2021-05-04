import React from 'react'

function Icon({icon  ,text , desc}) {
    return (
        <div>
            <div className="card">
            <div >
              <img src={icon} alt={text} className="icon" />
              <h3>{text}</h3>
            </div>
            <p>{desc}</p>
          </div>
        </div>
    )
}

export default Icon
