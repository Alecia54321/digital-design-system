/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * footer function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]



/**
 * A section for the footer that contains navigational elements
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {string} ariaLabel        - The aria-label attribute, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUnswFooterNav = ({ children, className = '', ariaLabel, ...attributeOptions }) => (
	<nav className={`au-footer__navigation ${ className }`} aria-label={ ariaLabel } { ...attributeOptions }>
		{ children }
	</nav>
);

AUnswFooterNav.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
};

AUnswFooterNav.defaultProps = {
	ariaLabel: 'footer navigation',
}


/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const AUnswFooterEnd = ({ children, className = '', ...attributeOptions }) => (
	<div className={`au-footer__end ${ className }`} { ...attributeOptions }>
		{ children }
	</div>
);

AUnswFooterEnd.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};


/**
 * DEFAULT
 * The footer component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {node}    children         - The inside of this section
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUnswFooter = ({ dark, alt, children, className = '', ...attributeOptions }) => (
	<footer
		className={ `au-footer ${ className }${ dark ? ' au-footer--dark' : '' }${ alt ? ' au-footer--alt' : '' } `}
		{ ...attributeOptions }
		role="contentinfo"
	>
		{ children }
	</footer>
);

AUnswFooter.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default AUnswFooter;