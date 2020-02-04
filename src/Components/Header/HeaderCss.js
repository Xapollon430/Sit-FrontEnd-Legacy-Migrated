import styled from "styled-components";

export const Navbar = styled.div`
	padding: 20px;
	display: grid;
	grid-template-areas: "brand nav";
	grid-template-columns: 100px;
	align-items: center;
	justify-items: center;
	@media (max-width: 700px) {
		grid-template-areas:
			"brand menu"
			"nav nav";
	}
`;

export const Nav = styled.div`
	grid-area: nav;
	width: 100%;
	display: ${props => (props.close === false ? "none" : "grid")};
	grid-gap: 10px;
	grid-template-columns: 120px 120px 1fr 120px 120px;
	@media (max-width: 700px) {
		grid-template-columns: none;
		grid-template-rows: repeat(4, auto);
	}
`;

export const Menu = styled.i`
	grid-area: menu;
	display: none;
	color: white;
	@media (max-width: 700px) {
		display: block;
		justify-self: end;
		padding-right: 20px;
	}
`;

export const Brand = styled.h1`
	grid-area: brand;
	font-size: 3rem;
	color: white;
	margin: 0px;
	font-family: "Quicksand", sans-serif;
	@media (max-width: 700px) {
		display: block;
		grid-area: brand;
	}
`;

export const EmptyDiv = styled.div`
	@media (max-width: 700px) {
		display: none;
	}
`;
