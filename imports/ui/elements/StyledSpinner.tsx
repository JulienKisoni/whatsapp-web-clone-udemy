import styled, { keyframes } from 'styled-components';

const animateSpinner = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const StyledSpinner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .spinner {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 0.5rem solid #09D261;
        border-top-color: transparent;
        animation: ${animateSpinner} 1s linear infinite;
    }
`

export default StyledSpinner;