# Ad Forensics
1. Website Link: https://adforensics.netlify.app/

2. How to run:
    - npm ci (Ensure your node version is updated. Vite requires Node.js version 18+)
    - npm run dev

3. Dependencies Used:
    - React
    - Scss
    - recharts (to render values on graphs / charts)
    - react-papaparse (to parse csv)
    - react-error-boundary

4. Please note:
    - The file uploaded under "Upload Advertiser Data" should adhere to the following format: (Advertiser, Date, Impressions, Clicks, CTR).
    - The file uploaded under "Upload Countries Data" should adhere to the following format: (Advertiser, Impressions, Country).
    - End date selection is enabled after a start date is chosen, and the date-based filter is applied only when both start and end dates are selected.
    - The option to upload countries data will only be enabled once advertiser data has been uploaded.
    - The selection of advertiser options depends on the uploaded advertiser data.

5. How to use:
    - Sample data is already available to view.
    - Filtering is available by date range and advertiser name.
    - Upload CSV files in the specified format, ensuring consistent column order as mentioned under "Please Note."
    - The graph dynamically adjusts upon data upload, supporting multiple advertisers, not necessarily limited to Syscox and Naparos.
    - Hover over the graph and pie chart to view details.

6. Components Architecture:

    ![Components Architecture](https://res.cloudinary.com/dspcaiix6/image/upload/v1717940458/AdForensics.drawio_fsxst5.svg)

7. Components Detailing:

   ![Components States and Props](https://res.cloudinary.com/dspcaiix6/image/upload/v1717945767/AdForensics-States-Props.drawio_cxqyxr.svg)


8. Further Enhancements:
    - Add unit testing via react-testing-library
    - Enhance Accessibility
    - WebApp is responsive; however, when accessed on a mobile device, a slight horizontal scroll is required to view the full graph.
    - Graphs and charts can be enhanced for a more visually appealing presentation, particularly the pie chart.
    - Helper tooltips can be provided, and error messages can be generalized to focus on specific errors, although custom error component is already generic. Currently, error messages lack specificity.
