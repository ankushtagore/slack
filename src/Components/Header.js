import React from 'react'
import styled from 'styled-components'
import './header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'


function Header() {
    return (
      <HeaderContainer>
        <HeaderLeft>
          
          <HeaderAvatar
            // onClick={ } will create a modal click page with user photo and some info
          />
        <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search here"></input> 
        </HeaderSearch>
       
        {/* Header Right */}
        <HeaderRight>
        <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    );
}


export default Header;



const HeaderContainer = styled.div`
  color: blue;
  background-color: #80d2de;
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  > .MuiSvgIcon-root {
    align-items: center;
    color: blue;
  }
`;

const HeaderLeft = styled.div`
  flex:0.3;
  display:flex;
  align-items: center;
  margin-left:20px;
  color: green;

  > .MuiSvgIcon-root {
  margin-left: auto;
  margin-right: 30px;
}

`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
  color: green;
  opacity: 0.5;
}
`

const HeaderSearch = styled.div`
  :hover {
    opacity: 0.8;
    color: blue;
  }
  align-items: center;
  text-align:center;
  border:1px gray solid;
  background-color: grey;
  display: flex;
  border-radius: 6px;
  margin-right: 15px;

  > input {
    color: blue;
    text-align:center;
    outline:0;
  }
`;

const HeaderRight = styled.div`
  :hover {
    opacity: violet;
    size: 200;
    /* flex: 0.3; */
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
      /* margin-left: auto; */
      /* margin-right: 20px; */
    }
  }
  color: #f7cac9;
`;


