import styled from 'styled-components';

const bgGreen = "#09D261";

const StyledChatItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    width: calc(100% - 3rem);
    height: 7.5rem;
    cursor: pointer;
    padding: 0 1.5rem;
    &:hover {
        background: #f4f5f5;
    }

    .chat--contentContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 1.5rem;
        border-bottom: 0.1rem solid #f2f2f2;
        width: 85%;
        height: 100%;
    }
    .content--line1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        line-height: normal;
        margin-bottom: 0.3rem;
    }
    .content--line1__title {
        font-size: 1.6rem;
        text-align: left;
    }
    .content--line1__date {
        font-size: 1.2rem;
        color: rgba(0,0,0,0.4);
        text-align: right;
        margin-top: 0.3rem;
        margin-left: 0.6rem;
    }
    .content--message {
        font-size: 1.4rem;
        color: rgba(0,0,0,0.6);
        overflow: hidden;
        white-space: nowrap;
    }
    .chat--badge {
        background: ${bgGreen}
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        text-align: right;
        margin-left: 2rem;
    }
`

export default StyledChatItem;