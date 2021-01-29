import React from 'react';

// stylesheet
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;