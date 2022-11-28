import PropTypes from 'prop-types';
import {
  StatsBox,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercent,
} from './Statistics.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatsBox>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <StatsLabel>{stat.label}</StatsLabel>
              <StatsPercent>{stat.percentage}%</StatsPercent>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsBox>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
