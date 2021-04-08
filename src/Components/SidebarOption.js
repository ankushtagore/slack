import React from "react";
import { db } from "../firebase";
import { useDispatch, Provider} from "react-redux";
import {enterRoom} from '../features/appSlice'
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { ExpandLessIcon } from "@material-ui/icons/ExpandLess";


function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
              roomId: id
          }))
      }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {!!Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  :hover {
    opacity: 0.7;
    background-color: green;
    text-shadow: 5px;
  }
  display: flex;
  flex: 1;
  margin-top: 1px;
  margin-bottom: -5px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  font-style: Arial;
`;

const SidebarOptionChannel = styled.h3`
  padding: 6px 0;
  font-weight: 500;
  margin-left: 15px;
`;
