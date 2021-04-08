import React from 'react'
import styled from "styled-components";


function Message({key, message, timestamp, user, userImage}) {
    return (
      <MessageContainer id = {key}>
        <img src={userImage} alt="photos of user" />

            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                    <p>{message}</p>
                    {/* <br /> */}
                </h4>
        </MessageInfo>
      </MessageContainer>
    );
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    > img {
        margin-right: 10px ;
        height: 40px;
        border-radius: 30px;
    }
`;

const MessageInfo = styled.div`
  display: flex;
  padding-left: 10px;

> h4 {
    :hover {
        opacity: 0.6;
        cursor: pointer;
    }
}

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }

  > h4 > p {
    font-weight: 400;
    color: #002e63;
  }
`;