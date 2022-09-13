import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #003050;
    --primary-color-hover: #00253E;
    --container: 1440px;
}

html {
    scroll-behavior: smooth !important;
}

body {
    overflow-x: hidden !important;
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

body::-webkit-scrollbar-thumb {
  background: var(--primary-color);
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color-hover);
}

*:focus {
    outline: transparent !important;
}

.error-message {
    font-size: 13px;
    color: #db3232 !important;
    margin-top: 5px;
}
`;
