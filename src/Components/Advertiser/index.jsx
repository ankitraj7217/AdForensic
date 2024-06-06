import React from 'react'
import { useAdvertiserContext } from '../../Contexts/Advertiser.context'
import LineGraph from '../LineGraph'
import { filterByKey, formatDate, sumByKey } from '../../Utils/genericUtils'

const Advertiser = () => {
  const { advertiserData } = useAdvertiserContext()

  const _generateGraphData = (doAggregate, filterKey, filterValue) => {
    let modifiedData = advertiserData
    if (doAggregate) {
      modifiedData = sumByKey(advertiserData, 'date', 'clicks')
    } 
    if (filterKey && filterValue) {
        modifiedData = filterByKey(advertiserData, filterKey, filterValue);
    }

    console.log('modifiedData: ', modifiedData)
    return {
      chartName: 'Line Graph',
      data: modifiedData.map((data) => {
        return { ...data, date: formatDate(data.date) }
      }),
      xAxisKey: 'date',
      yAxisKey: 'impressions',
    }
  }

  const lineGraphData = _generateGraphData(false, "advertiser", "Syscox")

  return (
    <section className="advertiser">
      Advertiser Data
      <LineGraph {...lineGraphData} />
    </section>
  )
}

export default Advertiser
