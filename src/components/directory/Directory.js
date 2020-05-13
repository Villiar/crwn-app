import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/MenuItem';
import './directory.style.scss';

const Directory = ({ section }) => (
  <div className='directory-menu'>
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
