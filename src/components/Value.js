import React from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

const Value = ({
  goodStats,
  neutralStats,
  badStats,
  total,
  positivePercentage,
}) => (
  <>
    <p className={styles.text}>Good:{goodStats}</p>
    <p className={styles.text}>Neutral:{neutralStats}</p>
    <p className={styles.text}>Bad:{badStats}</p>
    <p className={styles.text}>Total:{total}</p>
    <p className={styles.text}>Positive feedback:{positivePercentage}%</p>
  </>
);
Value.propTypes = {
  goodStats: PropTypes.number.isRequired,
  neutralStats: PropTypes.number.isRequired,
  badStats: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Value;