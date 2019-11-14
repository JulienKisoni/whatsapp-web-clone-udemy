import styled from 'styled-components';

const StyledMessageView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .message--label {
        background: white;
        border-radius: 1.8rem;
        padding-left: 2.5rem;
        padding-right: 2.2rem;
        height: 4.2rem;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .message--input {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2rem;
        min-height: 2rem;
        outline: none;
        width: 100%;
        user-select: text;
        z-index: 1;
        border: none;
        color: #2A2A2A;
        &::placeholder {
            color: rgba(0,0,0,0.3);
            opacity: 1;
            font-size: 1.4rem;
        }
    }
`

export default StyledMessageView;