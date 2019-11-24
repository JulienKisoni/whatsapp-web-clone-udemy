import styled, { css } from 'styled-components';

const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;

    ${props => props.otherProfile && css`
        width: 40%;
    `}
`

export default StyledRight;