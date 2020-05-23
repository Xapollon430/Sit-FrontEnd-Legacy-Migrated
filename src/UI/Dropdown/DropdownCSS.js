import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: absolute;
    display: grid;
    grid-auto-rows: 50px;
    right: 144px;
    top: 75px;
    width: 115px;
    border-radius: 5px;
    border: white 2px solid;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
`;

export const DropdownItem = styled.span`
    color: white;
    font-weight: 550;
    padding-top: 14px;
    padding-left: 10px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
