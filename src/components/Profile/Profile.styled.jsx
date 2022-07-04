import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 400px;
    height: 300px;
    background: rgb(242, 252, 252);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

export const ContainerUser = styled.div`
    width: 210px;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    .user-name {
        text-align: center;
    font-size: 20px;
    font-family: cursive;
    font-weight: 900;
    margin-top: 10px;
    margin-bottom: 0;
    }
    .user-tag {
        text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
    color: #9e9696;

    }

    .user-location {
        text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
    color: #9e9696;
    }
`

export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    width: 100px;
    height: 100px;
    background-color: grey;
    border-radius: 50%;
    `

export const ProfileInfo = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;
    border-top: 2px solid #ece5e5;
    background-color: rgb(248, 242, 242);
`

export const ProfileInfoItem = styled.li`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 70px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;

    
    :not(:last-child) {
        border-right: 2px solid #ece5e5;
    }

    .name {
        margin-bottom: 5px;
    font-family: cursive;
    color: #9e9696;
    }

    .amount {
        font-family: cursive;
        color: black;
    }
`