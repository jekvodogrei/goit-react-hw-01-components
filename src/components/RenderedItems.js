import PropTypes from "prop-types";

import user from "../user.json";
import data from "../data.json";
import friends from "../frinds.json";
import transactions from "../transactions.json";

import Section from "./Section";
import Profile from "./Profile";
import Statistics from "./Statistics";
import TransactionHistory from "./TransactionHistory";
import FriendList from "./FriendList";

function RenderedItems() {
  return (
    <Section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}> </FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Section>
  );
}

RenderedItems.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default RenderedItems;
