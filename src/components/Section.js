import PropTypes from "prop-types";
import { H1 } from "./Section.styled";

function Section({ title, children }) {
  return (
    <div className="My profile">
      {title && <H1 className="title">{title}</H1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
