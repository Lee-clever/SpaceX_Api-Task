import React, { useState, useEffect, useCallback } from 'react';
import PayloadCard from './PayloadCard';
import PaginationCommon from "./Pagination";



function Payload() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        loadData();
        //get data
    }, []);
    const loadData = async () => {
        await fetch("https://api.spacexdata.com/v3/payloads")
            .then(response => response.json())
            .then(receiveData => setData(receiveData))
    }
    // console.log(data)
    let NUM_OF_RECORDS = data.length;
    // console.log(NUM_OF_RECORDS)

    let LIMIT = 4;

    const onPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(page);
        },
        [currentPage]
    );
    const currentComments = data.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    );

    return (
        <div>
            <PayloadCard Comments={currentComments} />
            <div className="pagination-wrapper">


                <PaginationCommon
                    totalRecords={NUM_OF_RECORDS}
                    pageLimit={LIMIT}
                    pageNeighbours={1}
                    onPageChanged={onPageChanged}
                    currentPage={currentPage}
                />


            </div>

        </div>
    )
};

export default Payload
