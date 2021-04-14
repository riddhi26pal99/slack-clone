import styled from 'styled-components'
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <HeaderContainer>
            {/*Header Left */}
            <HeaderLeft>
                <HeaderAvatar 
                //TODO: Add onClick
                />
                <AccessTimeIcon />
            </HeaderLeft>
            {/*Header search */}
            <HeaderSearch>
                <SearchIcon />
            </HeaderSearch>
            {/*Header Right */}
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3px;
    display: flex;
    align-items: center;
    margin-left: 30px;

    > .MuiSvgIcon-root {
        margin-left: 120px;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`

`;