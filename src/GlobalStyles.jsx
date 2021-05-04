import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* Variables Declaratin */
:root {
  /* Define color */
  --black: #323232;
  --red: #ec4646;
  --yellow: #fed049;
  --green: #00af91;
  --blue: #a4ebf3;
  --purple: #7868e6;
  --lightgrey: #f3f4ed;
  --grey: #cdd0cb;
  --darkgrey: #4b5d67;
  --white: white;

  --purl: #524763;
  --purl-20: #6a5c80;
  --purl-60: #b8afc5;
  --darkPurl: #373142;
  --xtraPurl: #191324;
  --grey: #d8d8d8;
  --green: #cbe56c;
  --green-20: #daed97;
  --teal: #82d8d8;
  --teal-20: #b1e7e7;
  --red: #e54b4b;
  --red-20: #f08484;
  --pink: #cf256d;
  --black: #333;
  --black-20: #4f4f4f;
  --black-40: #828282;
  --black-60: #bdbdbd;
  --white-60: #e0e0e0;
  --white-40: #f2f2f2;
  --white-20: #f5f4f6;
  --white: #fff;

  /*Define Colors Intentions */
  --h1: 3.052rem;
  --h2: 2.441rem;
  --h3: 1.953rem;
  --h4: 1.563rem;
  --h5: 1.25rem;

  /* Difine Box box-shadowlevel */
  --level_1: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --level_2: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --level_3: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --level_4: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

}

/* End of Variables Declaratin */

/*Basic CSS */
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

.icon{
    width:3rem;
    height:3rem;
}

`;

export default GlobalStyles;