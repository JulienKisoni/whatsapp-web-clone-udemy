import styled from 'styled-components';

const iconGrey = "#929fa6";

const StyledLeftHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 3.2rem);
    height: 6%;
    background: #eee;
    padding: 1rem 1.6rem;

    .icons--left{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 14rem;
        height: 4rem;
    }
    .greyIcon {
        color: ${iconGrey}
        font-size: 2rem;
        cursor: pointer;
    }
`

export default StyledLeftHeader;