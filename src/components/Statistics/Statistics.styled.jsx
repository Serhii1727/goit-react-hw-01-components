import styled from 'styled-components';

export const Section = styled.section`
 margin-top: 20px;
 margin-right: auto;
 margin-left: auto;
 width: 400px;
 box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const Title = styled.h2`
    padding-top: 30px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-family: cursive;
`

export const ListStats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    margin-top: 30px;
    justify-content: center;
    list-style-type: none;
    

    .item {
        display: flex;
        flex-basis: calc(100% / 5);
        flex-direction: column;
        width: 80px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        background-color: rgb(137, 240, 240);


    .label {
        font-weight: 600;
        color: white;
    }
    .percentage {
        margin-top: 10px;
        font-weight: 600;
        color: white;
    }
    }

    
`