import PropTypes from 'prop-types';

export default function Page({children, className}) {
  return <main className={`flex-1 text-black ${className}`}>{children}</main>;
}

Page.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
