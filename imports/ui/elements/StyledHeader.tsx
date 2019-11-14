import styled from 'styled-components';

const iconGrey = "#929fa6";

const StyledHeader = styled.div`
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
    .headerMsg--container {
        text-align: left;
        width: 58rem;
        height: 4.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .headerMsg--title {
        color: #000000;
        font-size: 1.6rem;
    }
    .headerMsg--sbTitle {
        color: rgba(0,0,0,0.6);
        font-size: 1.3rem;
    }
`

export default StyledHeader;