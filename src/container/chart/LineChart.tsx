import React, { FC } from 'react'
import { Area } from '@ant-design/plots'

const LineChart: FC = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   asyncFetch()
  // }, [])

  const dataValue = [
    { day: 'Thứ 2', value: 140 },
    { day: 'Thứ 3', value: 220 },
    { day: 'Thứ 4', value: 180 },
    { day: 'Thứ 5', value: 240 },
    { day: 'Thứ 6', value: 251 },
    { day: 'Thứ 7', value: 190 },
    { day: 'CN', value: 185 },
  ]

  // const asyncFetch = () => {
  //   fetch(
  //     dataValue
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error)
  //     })
  // }
  const config = {
    data: dataValue,
    xField: 'day',
    yField: 'value',
    color: '#FAA05F',
    xAxis: {
      range: [0, 1],
    },
    yAxis: {
      range: [0, 1],
    },
    areaStyle: {
      fill: 'l(270) 0:#ffffff 1:#FAA05F',
    },
    smooth: true,
  }

  return <Area {...config} />
}

export default LineChart
