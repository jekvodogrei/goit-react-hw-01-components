import PropTypes from "prop-types";
import {
  FriendsOnline,
  FriendsOffline,
  ImgStyled,
  NameFriends,
} from "./FriendList.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <FriendsOnline className="status"></FriendsOnline>
      ) : (
        <FriendsOffline className="status"></FriendsOffline>
      )}
      <ImgStyled className="avatar" src={avatar} alt="User avatar" width="48" />
      <NameFriends className="name">{name}</NameFriends>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
