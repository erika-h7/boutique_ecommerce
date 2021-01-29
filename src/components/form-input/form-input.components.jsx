import React from 'react';

// stylesheet
import './form-input.styles.scss';

// functional component (because we don't want any state)
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />

        {
            label ?
            // with certain browsers when they do auto completion
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;