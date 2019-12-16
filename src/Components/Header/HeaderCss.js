import styled from "styled-components";

export const Navbar = styled.div`
	padding: 20px;
	display: grid;
	grid-gap: 7px;
	grid-template-columns: 100px 120px 120px 1fr 120px 120px;
	align-items: center;
	justify-items: center;
	position: static;
`;

export const Brand = styled.h1`
	font-size: 3rem;
	color: white;
	margin: 0px;
	font-family: "Quicksand", sans-serif;
`;
