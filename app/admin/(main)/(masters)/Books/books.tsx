'use client'
import React, { useState } from 'react'
import Papa from 'papaparse';

const Books = () => {
    const [csvData, setCsvData] = useState<any>([]);
    const [jsonData, setJsonData] = useState('');
    const csvUploadFn = (file: File | null) => {
        // const file = event.target.files[0];
        if (file == undefined) return;
        // const fileType = file.name.split('.').pop().toLowerCase();
        // if (fileType !== 'csv') {
        //     alert('Please upload a CSV file.');
        //     return;
        // }
        Papa.parse(file, {
            complete: (result) => {
                console.log(result)
                // setCsvData(result.data);
            },
            header: true,
        });
        const res = JSON.stringify(csvData);
        setJsonData(res);
    };
    return <>
        <div>books</div>
        <input type='file' onChange={(e) => {
            csvUploadFn(e.target.files instanceof FileList ? e.target?.files[0] : null);
        }} />
        {jsonData}
    </>
}

export default Books