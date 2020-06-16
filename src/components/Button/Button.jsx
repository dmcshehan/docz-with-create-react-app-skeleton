import React from 'react';
import t from 'prop-types';

import classNames from './Button.module.css';

const Button = ({ children, type }) => (
	<button
		type={type}
		className={classNames.button}
		onClick={() => {
			alert('You clicked Me');
		}}
	>
		{children}
	</button>
);

Button.propTypes = {
	/**
	 * This is a description for this prop.
	 * Button type.
	 */
	type: t.oneOf(['button', 'submit', 'reset']),
};
Button.defaultProps = {
	type: 'button',
};
export default Button;
