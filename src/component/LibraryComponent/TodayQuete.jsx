import React from 'react'

const TodayQuete = () => {
  return (
    <div
    className="d-flex flex-column p-3 text-white col-5 rounded-3"
    style={{
      background: "linear-gradient(to right,#5A77DF 15%,#3E53A0 100%)",
    }}
  >
    <h3>Today Quote</h3>
    <p>
      “There is more treasure in books than in all the  pirate’s
      loot on Treasure Island.”
    </p>

    <div className="d-flex flex-row justify-content-between align-items-center">
      ... <span>walt disney</span>
    </div>
  </div>
  )
}

export default TodayQuete