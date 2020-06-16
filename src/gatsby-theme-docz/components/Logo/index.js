import React from 'react';
import logo from '../../assets/elephant.svg';

import classNames from './Logo.module.css';

export const Logo = () => <img src={logo} className={classNames.logo} alt="That's my logo" />;
