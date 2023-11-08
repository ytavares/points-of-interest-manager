import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0 auto;
		font-family: 'Bai Jamjuree', sans-serif;
		background: #141416;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	.hidden {
		opacity: 0;
		transition: opacity 1s linear;
	}
	.show {
		opacity: 1;		
	}
	*::-webkit-scrollbar {
		width: 6px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.color.primary.main};
		border-radius: 20px;
	}
  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    background-color: rgba(255, 255, 255, 0.15) !important;
  }
`;
