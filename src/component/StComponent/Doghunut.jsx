import { Doughnut} from "react-chartjs-2";

import React from 'react'

const Doghunut = ({percentage}) => {
    console.log(percentage)
  return (
    
    <div>
        <Doughnut
         data = {{
            labels: [
              
                percentage.toString()
              
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [Number(percentage),(100-Number(percentage))],
              backgroundColor: [
                '#5A77DF',
                '#ECEEF0'
                
              ],
              
              
            }]
          }} 

          options={{
            plugins: {
                legend: {
                  display: false, // Hides the legend
                },
              
                datalabels: {
                    color:'#ECEEF0'
                }
                
                
            }
          }}
          />
    </div>
  )
}

export default Doghunut