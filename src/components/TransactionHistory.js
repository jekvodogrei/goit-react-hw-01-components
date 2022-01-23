import PropTypes from "prop-types";
import {
  Table,
  HEAD,
  BODY,
  List,
  ListItem,
  ListType,
} from "./Transaction.styled";

const Transaction = ({ items }) => {
  return (
    <Table className="transaction-history">
      <HEAD>
        <List>
          <ListItem>Type</ListItem>
          <ListItem>Amount</ListItem>
          <ListItem>Currency</ListItem>
        </List>
      </HEAD>

      <BODY>
        {items.map((item) => (
          <List key={item.id}>
            <ListType>{item.type}</ListType>
            <ListType>{item.amount}</ListType>
            <ListType>{item.currency}</ListType>
          </List>
        ))}
      </BODY>
    </Table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transaction;
