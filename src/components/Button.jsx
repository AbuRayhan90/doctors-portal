/* eslint-disable react/prop-types */
const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary text-white ${
        type === "submit" ? "capitalize" : "uppercase"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
