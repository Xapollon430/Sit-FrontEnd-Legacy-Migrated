import styled from "styled-components";

export const Section = styled.section`
	width: 60%;
	margin: 80px auto 0px auto;
`;

export const Title = styled.h1`
	font-size: 3rem;
	color: white;
	font-family: "Quicksand", sans-serif;
`;

export const Paragraph = styled.p`
	font-size: 1.4rem;
	color: white;
`;

export const Button = styled.button`
	background: none;
	color: white;
	width: 170px;
	height: 50px;
	font-size: 1.5rem;
	outline: none;
	cursor: pointer;
	border: 1px solid white;
	&:hover {
		color: black; //
		background: white;
	}
`;

export const Footer = styled.p`
	color: white;
`;

export const Link = styled.a`
	color: white;
	font-size: 1.2rem;
`;
