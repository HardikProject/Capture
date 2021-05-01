import React from 'react'

function Icon({icon  ,text , desc}) {
    return (
        <div>
            <div className="card">
            <div className="icon">
              <img src={icon} alt={text} />
              <h3>{text}</h3>
            </div>
            <p>{desc}</p>
          </div>
        </div>
    )
}

export default Icon
