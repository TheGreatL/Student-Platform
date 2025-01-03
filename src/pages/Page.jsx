import PropTypes from "prop-types";

export default function Page({ children }) {
  return <main className="flex-1 bg-slate-50 text-black">{children}</main>;
}

Page.propTypes = {
  children: PropTypes.any,
};
