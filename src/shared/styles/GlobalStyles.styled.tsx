import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../../types/CommonTypes";

export const GlobalStyled = createGlobalStyle<{ theme: ThemeType }>`
${normalize};

*{
	box-sizing: border-box;
}

body{
	font-family: ${({ theme }) => theme.fontFamily.primary};
	background: #2D2D2D;
}

html,body,#__next{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
`;
