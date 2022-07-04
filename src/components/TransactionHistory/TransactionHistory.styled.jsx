import styled from 'styled-components';

export const Table = styled.table`
    margin-top: 40px;
    margin-bottom: 40px;
    margin-right: auto;
    margin-left: auto;
    width: 400px;
    border: 1px solid grey;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-collapse: collapse;
`

export const TheadTable = styled.thead`
    background-color: rgb(148, 237, 237);

    th {
        border-right: 1px solid grey;
    }
`

export const BodyTable = styled.tbody`
border: 1px solid grey;
    border-collapse: collapse;

    tr {
        text-align: center;
        
    }

    tr:nth-child(2n-1) {
        border: 1px solid grey;
        border-collapse: collapse;
        background-color: white;
    }

    tr:nth-child(2n) {
        border: 1px solid grey;
        border-collapse: collapse;
        background-color: rgb(195, 205, 205);
    }

    td {
        border-right: 1px solid grey;
    }


`