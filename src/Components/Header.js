import styled from 'styled-components'
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
    const [user] = useAuthState(auth);
    
    return (
        <HeaderContainer>

            {/*Header Left */}
            <HeaderLeft>
                <HeaderAvatar 
                    onClick={ () => auth.signOut()}
                    alt = {user?.displayName}
                    src = {user?.photoURL}
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/*Header search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='search' />
            </HeaderSearch>
            
            {/*Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
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
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    margin-right: 400px;
    border: .5px gray solid;
    color: gray;
    padding: 0 50px;

    > input {
        background-color: transparent;
        text-align: center;
        outline: none;
        min-width: 30vw;
        color: white;
        border: none;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

     > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;