import styled from "styled-components"
import { Avatar,IconButton, Button } from "@material-ui/core"
import SmsIcon from '@material-ui/icons/Sms';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import { auth,db } from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollection} from "react-firebase-hooks/firestore"
import Chat from './Chat';

function SideBar() {
    const [user] = useAuthState(auth);
    const userChatRef = db.collection('chats').where('users', 'array-contains', user.email);
    const [chatsSnapshot] = useCollection(userChatRef)
    const createChat = () => {
        const input = prompt(
            "please enter the email of person you wanna chat with"
        );
        if (!input) return null;
        if (EmailValidator.validate(input)&& !chatAlreadyExists && input!== user.email) {
            db.collection('chats').add({
                users:[user.email, input],
            })
        }
        const chatAlreadyExists = (recipientEmail) => {
            !!chatsSnapshot?.docs.find(chat=> chat.data().users.find((user)=>user=== recipientEmail)?.length>0)
        }
    };
    return (
        <Container>
            <Header>
                <UserAvatar onClick={()=> auth.signOut() }/>
                <IconsContainer>
                    <IconButton>
                    <SmsIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </IconsContainer>
                </Header>
                <Search>
                    <SearchIcon />
                    <SearchInput placeholder='Search in chat'/>
            </Search>
            <StyledButton onClick={createChat}>
                Start a new chat
            </StyledButton>
            {chatsSnapshot?.docs.map((chat)=>{<Chat key={chat.id} id={chat.id} user={chat.data().users} />})}
            
        </Container>
    )
}

export default SideBar

const Container = styled.div`

`
const StyledButton = styled(Button)`
    width: 100vw;
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`
const Header = styled.div`
    display: flex;
    position: sticky;
    justify-content: space-between;
    top:0;
    z-index: 1;
    background-color: #fff;
    align-items: center;
    padding:15px;
    height:80px;
    border-bottom: 1px solid whitesmoke;

`
const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius:2px;
`
const SearchInput = styled.input`
    outline-width:0;
    border:none;
    flex: 1;
`
const UserAvatar = styled(Avatar)`

`
const IconsContainer = styled.div`

`