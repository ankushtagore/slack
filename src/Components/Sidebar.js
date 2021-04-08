import React from "react";
import styled from "styled-components";

import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import  InsertCommentIcon from "@material-ui/icons/InsertComment";
import  InboxIcon from "@material-ui/icons/Inbox";
import  DraftsIcon from "@material-ui/icons/Drafts";
import  BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import  AppsIcon from "@material-ui/icons/Apps";
import  ExpandLessIcon  from "@material-ui/icons/ExpandLess";
import  FileCopyIcon  from "@material-ui/icons/FileCopy";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add";



function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Legend</h2>
          <h3>
            <FiberManualRecordIcon />
            Ankush Tagore
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={CreateIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Item" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browsers" />
      <SidebarOption Icon={PeopleAltIcon} title="People and user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />

      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      <h1>
        {channels?.docs.map((doc) => (
          <SidebarOption
            key={doc.id}
            id={doc.id}
            title={doc.data().name}
          />
        ))}{" "}
      </h1>
    </SidebarContainer>
  );
}

export default Sidebar ;

const SidebarContainer = styled.div`
  color: white;
  background-color: #80d2de;
  flex: 0.3;
  border-top: 1px solid #80d2de;
  max-width: 260px;
  margin-top: 50px;

  >hr {
    margin-top: 10px;
    margin-bottom: 10 px;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid pink;
  padding: 13px;

  > .MuiSvgIcon-root {
    :hover {
      opacity: 0.7;
    }
    padding: 8px;
    color: blue;
    font-size: 16px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;

    > h3 {
      display: flex;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 5px;
      align-items: center;
    }
  }
  > h3 > .MuiSvgIcon-root {
    color: green;
  }
`;
