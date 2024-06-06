import React, { useState, useEffect } from 'react';
import { usePapaParse } from 'react-papaparse';
import { useAdvertiserContext } from '../../Contexts/Advertiser.context';

const FlieUpload = () => {
    const { setAdvertiserData } = useAdvertiserContext();
    const { readString } = usePapaParse();

    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result;
            if (typeof text === 'string') {
                readString(text, {
                    complete: (results) => {
                        const extractedData = results.data.slice(1).map((advertiserData) => ({
                            advertiser: String(advertiserData[0]),
                            date: advertiserData[1],
                            impressions: Number(advertiserData[2]),
                            clicks: Number(advertiserData[3]),
                            ctr: Number(advertiserData[4])
                        }));
                        setAdvertiserData(extractedData);
                    },
                });
            }
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            <h2>Advertiser Data</h2>
            {/* <table>
        <thead>
          <tr>
            <th>Advertiser</th>
            <th>Date</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>CTR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.advertiser}</td>
              <td>{item.date.toLocaleDateString()}</td>
              <td>{`${item.impressions}`}</td>
              <td>{`${item.clicks}`}</td>
              <td>{`${item.ctr}`}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
        </div>
    );
};

export default FlieUpload;
