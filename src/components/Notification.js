import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

function Notification({ message }) {
  return <p className={styles.text}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;