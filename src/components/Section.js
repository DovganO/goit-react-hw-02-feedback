import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

function Section({ title, children }) {
  return (
    <>
      {title && <h1 className={styles.header}>{title}</h1>}
      {children}
    </>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;