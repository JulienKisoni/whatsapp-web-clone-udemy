import styled, { css } from 'styled-components';

const StyledLeft = styled.div `
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    border-right: ${ ({theme}) => '0.1rem solid '+theme.left.color.borderRight};

    ${props => props.otherProfile && css`
        width: 30%;
    `}
`;

export default StyledLeft;