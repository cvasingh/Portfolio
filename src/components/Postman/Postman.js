import React, { useState } from 'react';
import Request from './Workspace/RequestPanel';
import Response from './Workspace/ResponsePanel';

export default function Postman() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <div className='bg-white mt-20 p-4 lg:p-8 '>
            <Request setResponse={setResponse} setLoading={setLoading} />
            <Response response={response} loading={loading} />
        </div>
    )
}
