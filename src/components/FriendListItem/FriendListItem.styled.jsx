import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: 200px;
    height: 100px;

    :not(:last-child) {
    margin-bottom: 15px;
}

    .avatar {
        display: block;
        
    }

    .name {
        text-align: center;
        margin: 0;
    }

    .statusOnline {
        display: block;
        width: 20px;
        height: 20px;
        background: green;
        border-radius: 50%;
    }

    .statusOffline {
        display: block;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 50%;
    }

`