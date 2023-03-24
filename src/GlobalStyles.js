import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white:#FFF;
    --lightGrey:#eee;
    --medGrey:#353535;
    --darkGrey:#1c1c1c;
    --fontSuperBig:2.5rem;
    --fontBig:1.5rem;
    --fontMed:1.2rem;
    --fontSmall:1rem;
}
*{
    box-sizing:border-box;
    font-family: 'Work Sans';
    text-align: center;
}
body{
    margin:0;
}
h1{
    font-size:2rem;
    font-weight: 600;
    color:var(--white);
}
h3{
    font-size: 1.1rem;
    font-weight: 600;
}
p{
    font-size: 1rem;
    color:var(--white);
}
.visible,
.hidden {
  overflow: hidden;
  /* This container should not have padding, borders, etc. */
}
.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}
.visible > div,
.hidden > div {
  /* Put any padding, border, min-height, etc. here. */
}
.hidden > div {
  margin-top: -10000px;
  transition: margin-top 0s 2s;
}

`