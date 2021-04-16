import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions'

//icons import
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection} from 'react-firebase-hooks/firestore';
import { db } from '../firebase'


function SideBar() {

    const [channels, loading, error] = useCollection(db.collection("rooms"));

    return (
        <SidebarComponent>
            <Sidebarheader>
                <SidebarInfo>
                    <h2>SLACK TUTORIAL</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Riddhi Pal
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </Sidebarheader>

            <SidebarOptions Icon={InboxIcon} title ='Mentions & reactions' />
            <SidebarOptions Icon={InsertCommentRoundedIcon} title ='Threads' />
            <SidebarOptions Icon={DraftsIcon} title ='Saved items' />
            <SidebarOptions Icon={BookmarkBorderIcon} title ='Channel browse' />
            <SidebarOptions Icon={PeopleAltIcon} title ='People & user groups' />
            <SidebarOptions Icon={AppsIcon} title ='Apps' />
            <SidebarOptions Icon={FileCopyIcon} title ='File browser' />
            <SidebarOptions Icon={ExpandLessIcon} title ='Show less' />
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title ='Channels' />
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption title ='Add channel' />

            {channels?.docs.map((doc) => (
                <SidebarOptions
                    key = {doc.id}
                    id = {doc.id}
                    title = {doc.data().name}
                />
            ))}

        </SidebarComponent>
    );
}

export default SideBar;

const SidebarComponent = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const Sidebarheader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: black;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    >h2 {
        font-size: 15px;
        font-weight: 900px;
        margin-bottom : 5px;
    }

    >h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{
        display: flex;
        border: none;
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;