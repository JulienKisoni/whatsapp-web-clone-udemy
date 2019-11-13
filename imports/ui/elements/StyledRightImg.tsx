import styled from 'styled-components';

const darkGrey = "#4b5961";
const mediumGrey = "#929fa6";
const lightGrey = "#e1e9eb";
const bgGrey = "#f7f9fa";

const StyledRightImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${bgGrey}

    .rightImg--image {
        width: 25rem;
        height: 25rem;
        margin-bottom: 2.8rem;
    }
    .rightImg--title {
        font-size: 3.2rem;
        margin-bottom: 1.8rem;
        color: ${darkGrey};
        font-weight: 300;
    }
    .rightImg--div {
        margin-bottom: 3rem;
        width: 42rem;
    }
    .rightImg--p {
        text-align: center;
        color: ${mediumGrey};
        font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 3.4rem;
    }
    .rightImg--divider {
        width: 100%;
        height: 0.2rem;
        background: ${lightGrey};
        margin-bottom: 0.1rem;
    }
`

export default StyledRightImg;