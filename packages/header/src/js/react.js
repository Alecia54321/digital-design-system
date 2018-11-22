/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * header function
 *
 * Headers provide a consistent start to pages.
 *
 **************************************************************************************************************************************************************/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * The header brand component
 *
 * @param  {string}   brandImage       - An optional brand image, optional
 * @param  {string}   brandImageAlt    - Brand image alt tag
 * @param  {string}   link             - An optional link for the header brand, optional
 * @param  {node}     children         - The inside of this section
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const AUnswHeaderBrand = ({
	brandImage,
	brandImageAlt,
	link,
	children,
	className = '',
	linkComponent,
	...attributeOptions
}) => {
	const LinkComponent = link
		? linkComponent
		: 'div';

	if( link ) {
		// If we are using a normal link
		if( LinkComponent === 'a' ) {
			attributeOptions.href = link;
		}
		// If we are using a link component
		else if( typeof LinkComponent === 'function' ) {
			attributeOptions.to = link;
		}
	}

	let brand = brandImage
		? <img className="au-nsw-header__brand-image" alt={ brandImageAlt } src={ brandImage } />
		: null;

	return (
		<LinkComponent className={ `au-nsw-header__brand ${ className }` } { ...attributeOptions }>
			{ brand }
		</LinkComponent>
	);
}

AUnswHeaderBrand.propTypes = {
	link: PropTypes.string,
	brandImage: PropTypes.string,
	brandImageAlt: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
}

AUnswHeaderBrand.defaultProps = {
	brandImageAlt: 'Australian Government Crest',
	linkComponent: 'a',
};


/**
 * DEFAULT
 * The header component
 *
 * @param  {boolean}  dark             - Add the dark variation class, optional
 * @param  {boolean}  alt              - Add the alt variation class, optional
 * @param  {node}     children         - The inside of this section
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const AUheader = ({ hero, dark, alt, children, className = '', ...attributeOptions }) => (
	<div
		className={`au-nsw-header ${ className }${ dark ? ' au-nsw-header--dark' : '' }${ alt ? ' au-nsw-header--alt' : '' }`}
		role="banner" { ...attributeOptions }>
		{ children }
	</div>
);

AUheader.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

export default AUheader;