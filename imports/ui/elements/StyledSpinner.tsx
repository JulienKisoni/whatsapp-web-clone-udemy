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
        border: ${({theme}) => '0.5rem solid'+theme.spinner.color.green};
        border-top-color: transparent;
        animation: ${animateSpinner} 1s linear infinite;
    }
`

export default StyledSpinner;