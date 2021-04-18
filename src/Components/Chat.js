import styled from 'styled-components'
import React, { useRef } from 'react';
//import ChatInput from '../Components/ChatInput'

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import Messages from './Messages';
import { db } from '../firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';

function Chat() {

    const roomId = useSelector(selectRoomId);
    const chatRef = useRef(null);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessage, loading] = useCollection(
        roomId && db 
            .collection('rooms')
            .doc(roomId)
            .collection("message")
            .orderBy('timestamp', "asc")
    );

    useEffect (() => {
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth",
        });
    }, [roomId, loading]);

    return (
        <ChatContainer>
        { roomDetails && roomMessage && (
            <React.Fragment>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>
                                #{roomDetails?.data().name}
                            </strong>
                        </h4>
                        <StarBorderOutlinedIcon />
                    </HeaderLeft>
                                
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>
                                
                
                <ChatMessage>
                    {roomMessage?.docs.map( (doc) => {
                        const { message, timestamp, user, userImage} = doc.data();

                        return (
                            
                            <Messages 
                            key= {doc.id}
                            message = {message}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                            />
                        )
                    })}

                    < ChatBottom ref={chatRef} /> 

                </ChatMessage>
                
                <ChatInput 
                chatRef = {chatRef}
                channelName = {roomDetails?.data().name}
                channelId = {roomId}
                />
                
            </React.Fragment>
        )}            
        </ChatContainer>
    )
}

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessage = styled.div``;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`;


const HeaderLeft = styled.div`
    display:flex;
    align-items: center;

    >h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`

    > p {
        align-items: center;
        display: flex;
        font-size: 14px;

    }

> p > .MuiSvgIcon-root {
        justify-content: center;
        margin-right: 5px !important;
        font-size: 16px;
    }
`;


const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow: scroll;
    margin-top: 60px;
`;
