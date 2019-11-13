import styled from 'styled-components';

const StyledChatList = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    height: 69.5%;
    overflow-y: auto;
    position: relative;

    &::-webkit-scrollbar {
    width: 0.5rem;
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.2rem;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
`

export default StyledChatList;