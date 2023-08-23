import { Button as ButtonBase } from "@mui/base";
import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({ label, ...props }) => {
    return <ButtonBase {...props}>{label}</ButtonBase>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: undefined,
};
