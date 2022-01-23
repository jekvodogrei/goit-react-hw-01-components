import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import { UlFriend, LiFriend } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <>
      <UlFriend className="friend-list">
        {friends.map((friend) => (
          <LiFriend key={friend.id} className="item">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </LiFriend>
        ))}
      </UlFriend>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
