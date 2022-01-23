import styled from "styled-components";

export const UlFriend = styled.ul`
  display: block;
  margin: 0px auto;
  margin-top: 5px;
  max-width: 500px;
  text-align: center;
  border: solid 3px black;
`;

export const LiFriend = styled.li`
  display: inline-block;
  border: solid 0px black;
  padding: 10px;
  margin: 0px;
  font-size: 10pt;
  font-weight: 500;
`;

export const FriendsOnline = styled.span`
  display: inline-block;
  border-radius: 7px;
  padding: 7px 7px;
  background-color: green;
`;

export const FriendsOffline = styled.span`
  display: inline-block;
  border-radius: 7px;
  padding: 7px 7px;
  background-color: red;
`;

export const ImgStyled = styled.img`
  display: block;
  padding: 20px 10px;
`;

export const NameFriends = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  color: blue;
  font-size: 20pt;
  font-weight: auto;
`;
