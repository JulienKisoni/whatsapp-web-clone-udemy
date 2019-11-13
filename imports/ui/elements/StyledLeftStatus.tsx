import styled from 'styled-components';

const bgBlue = "#9de1fe";
const bgOrange = "#fed859";
const textGrey = "#2b3940";
const spanGrey = "#384c56";

const StyledLeftStatus = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${props => props.color === "blue" ? bgBlue : bgOrange};
    width: calc(100% - 2.6rem);
    height: calc(16% - 2.4rem);
    padding: 1.2rem 1.3rem;
    cursor: pointer;

    .status--textContainer {
        padding-left: 1.3rem;
    }
    .text--big {
        color: ${textGrey};
        font-size: 1.6rem;
        line-height: 2.1rem;
        margin-bottom: 0.2rem;
    }
    .text--small {
        color: ${spanGrey}
        font-size: 1.4rem;
        &:hover {
            text-decoration: underline;
        }
    }
    .icon--color {
        color: ${bgBlue}
    }
`

export default StyledLeftStatus;