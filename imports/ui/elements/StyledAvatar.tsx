import styled from 'styled-components';

const StyledAvatar = styled.div`
    width: ${props => props.size === '4' ? '4rem' : '4.9rem'};
    height: ${props => props.size === '4' ? '4rem' : '4.9rem'};
    border-radius: ${props => props.size === '4' ? '2rem' : '2.45rem'};
    position: relative;
    overflow: hidden;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar--img {
        width: 100%;
        height: 100%;
    }
`

export default StyledAvatar;