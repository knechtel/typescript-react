import React, { FC, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { CLIENT_ALL } from '../util/url';

const columns = [
    {
        name: 'Title',
        selector: (row: { title: any; }) => row.title,
    },
    {
        name: 'Year',
        selector: (row: { year: any; }) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
interface MessageProps {
    message: string;
}

const FunctionalComponent: FC<MessageProps> = ({ message }) => {

    useEffect(() => {
        axios.get(CLIENT_ALL, { auth: { username: 'maiquel', password: '123' } })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    });

    return (
        <>
            <DataTable
                columns={columns}
                data={data}
            />
        </>
    );
};

export default FunctionalComponent;