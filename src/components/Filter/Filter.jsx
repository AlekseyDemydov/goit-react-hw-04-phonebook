import PropTypes from 'prop-types';

const Filter = ({ value, title, handleChange }) => {
  return (
    <>
      <h2>{title}</h2>
      <input
        type="text"
        value={value}
        placeholder="Enter name"
        name="filter"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
