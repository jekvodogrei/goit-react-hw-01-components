import PropTypes from "prop-types";
import {
  Div,
  Img,
  Name,
  Info,
  Ul,
  Li,
  LiHeader,
  LiNumbers,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Div className="profile">
      <div className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Info className="tag">@{tag}</Info>
        <Info className="location">{location}</Info>
      </div>

      <Ul className="stats">
        <Li>
          <LiHeader className="label">Followers </LiHeader>
          <LiNumbers className="quantity">{stats.followers}</LiNumbers>
        </Li>
        <Li>
          <LiHeader className="label">Views </LiHeader>
          <LiNumbers className="quantity">{stats.views}</LiNumbers>
        </Li>
        <Li>
          <LiHeader className="label">Likes </LiHeader>
          <LiNumbers className="quantity">{stats.likes}</LiNumbers>
        </Li>
      </Ul>
    </Div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
