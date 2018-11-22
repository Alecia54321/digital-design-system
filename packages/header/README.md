digital.nsw/header
============

> Headers provide a consistent start to pages.


## Contents

* [Install](#install)
* [Usage](#usage)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install

```shell
npm install digital.nsw/header --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


### React

Usage:

```jsx
import AUheader, { AUheaderBrand } from './header.js';

<AUheader>
	<AUheaderBrand
		link="#"
		brandImage="http://placehold.it/256x80"
		brandImageAlt="Digital New South Wales"
	/>
</AUheader>
```

All props:

```jsx
<AUheader
  alt={ false }       {/* An alternate variation of the component, optional */}
  dark={ false }      {/* A dark variation of the component, optional */}
/>

<AUheaderBrand
  brandImage="Page title" {/* The headline content, optional */}
  brandImageAlt="1"       {/* Brand image alt tag */}
  link="/"                {/* An optional link for the header brand, optional */}
  linkComponent="a"       {/* The component used for the link, optional */}
  children                {/* Anything inside */}
  attributeOptions        {/* Any other attribute options */}
></AUheaderBrand>
```
_(💡 additional props are spread onto the component)_

For more details have a look at the [usage example](https://github.com/govau/uikit/tree/master/packages/header/tests/react/index.js).


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
header
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v1.0.0 - Inital header pattern source commit

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [GPL-3.0](https://raw.githubusercontent.com/digitalnsw/digital-design-system/master/LICENSE).


**[⬆ back to top](#contents)**

# };