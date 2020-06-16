// src/gatsby-theme-docz/components/Logo/index.js
import React from 'react';
import { Logo } from '../Logo';

import classNames from './Header.module.css';

export const Header = () => {
	return (
		<header className={classNames.header}>
			<Logo></Logo>
			<div className={classNames.heading}>This is the heading</div>
		</header>
	);
};
