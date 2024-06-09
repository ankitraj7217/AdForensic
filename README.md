# Ad Forensics
URL: https://adforensics.netlify.app/

1. How to run
    - npm i
    - npm run dev

2. Tech Stack and Libraries Used:
    - React
    - Scss
    - recharts (to render values on graphs / charts)
    - react-papaparse (to parse csv)
    - react-error-boundary

3. Please note:
    - File uploaded under Upload Advertiser Data should be in the following format - (Advertiser, Date, Impressions, Clicks, CTR)
    - File uploaded under Upload Countries Data should be in the following format - (Advertiser, Impressions, Country)
    - End date will only be enabled after start date is selected
    - Upload Countries Data will only be enabled when Advertiser Data is already uploaded
    - Select Advertiser options depend upon the advertiser data.

4. Components Architecture:

    ![Components Architecture](https://res.cloudinary.com/dspcaiix6/image/upload/v1717940458/AdForensics.drawio_fsxst5.svg)

5. Components Detailing:

   ![Components States and Props](https://res.cloudinary.com/dspcaiix6/image/upload/v1717945767/AdForensics-States-Props.drawio_cxqyxr.svg)

