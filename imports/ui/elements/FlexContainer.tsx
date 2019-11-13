import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction}
    justify-content: ${props => props.justifyContent}
    align-items: ${props => props.alignItems}
`

export default FlexContainer;