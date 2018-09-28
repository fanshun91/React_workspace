import { injectGlobal } from 'styled-components'

injectGlobal`
html {
	line-height: 1.15;
	font-size: 100px;
	-webkit-text-size-adjust: 100%;
}

body {
	font-family: PingFang SC, Verdana, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, Arial, sans-serif;
	font-size: 0.14rem;
	color: #222;
}

body,
div, p, form,
h1, h2, h3, h4, h5, h6,
input, textarea,
button, select,
ul {
	margin: 0;
	padding: 0;
}

/* 不对ol做过多修改，保持其有序列表的特性 */
ol,
dl, dd,
pre,
optgroup {
	margin: 0;
}

ul {
	list-style: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input,
button,
select,
optgroup,
textarea {
	line-height: 1.15;
  font-family: inherit;
  font-size: 100%;  
	border: 1px solid #666;
	background-color: transparent;
	outline: none;
}

input[type=number],
input[type=date] {
	background-color: #fff;
}

input[type=range],
optgroup {
	border: 0;
}

input,
button {
  overflow: visible;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button,
select {
  text-transform: none;
}


textarea {
	overflow: auto;
	resize: none;
}

pre,
code {
	font-family: monospace, monospace;
}

img {
	border-style: none;
}

a {
	color: inherit;
	text-decoration: none;
	background-color: transparent;
}

a:hover,
a:active {
	text-decoration: underline;
}

b,
strong {
	font-weight: bolder;
}

small {
	font-size: 80%;
}

[hidden] {
  display: none;
}

.clear:after {
  clear: both;
}

.clear:before,
.clear:after {
	content: '';
	display: table;
}

@media screen and (max-width: 1600px) {
	.navWrapper {
		width: 800px;
	}
}

@media screen and (max-width: 1200px) {
	.navWrapper {
		width: 640px;
	}
}

@media screen and (max-width: 1024px) {
	html {
		width: 1034px;
		overflow: hidden;
	}

	.navWrapper {
		width: 560px;
	}
}
`