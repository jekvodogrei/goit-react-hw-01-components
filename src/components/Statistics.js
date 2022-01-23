import PropTypes from "prop-types";
import { Section, H2, Ul, Li, Header, Numbers } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <H2 className="title">{title}</H2>}
      <Ul className="stat-list">
        {stats.map((stat) => (
          <Li key={stat.id} className="item">
            <Header className="label">{stat.label}</Header>
            <Numbers className="percentage"> {stat.percentage}%</Numbers>
          </Li>
        ))}
      </Ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
