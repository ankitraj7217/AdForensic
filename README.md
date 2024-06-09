# Ad Forensics
1. Website Link: https://adforensics.netlify.app/

2. How to run:
    - npm i
    - npm run dev

3. Tech Stack and Libraries Used:
    - React
    - Scss
    - recharts (to render values on graphs / charts)
    - react-papaparse (to parse csv)
    - react-error-boundary

4. Please note:
    - File uploaded under Upload Advertiser Data should be in the following format - (Advertiser, Date, Impressions, Clicks, CTR).
    - File uploaded under Upload Countries Data should be in the following format - (Advertiser, Impressions, Country).
    - End date will only be enabled after start date is selected.
    - Upload Countries Data will only be enabled when Advertiser Data is already uploaded.
    - Select Advertiser options depend upon the advertiser data.

5. How to use:
    - Sample data is already available to view.
    - You can select a date range to filter and Advertiser Name to filter.
    - You can upload csv files in above mentioned format and it can be dynamic, but ensure column names are in same order.
    - Graph will automatically adjust on upload of data.

6. Components Architecture:

    ![Components Architecture](https://res.cloudinary.com/dspcaiix6/image/upload/v1717940458/AdForensics.drawio_fsxst5.svg)

7. Components Detailing:

   ![Components States and Props](https://res.cloudinary.com/dspcaiix6/image/upload/v1717945767/AdForensics-States-Props.drawio_cxqyxr.svg)


8. Further Enhancements:
    - Add unit testing via react-testing-library
    - Enhance Accessibility
