import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: absolute;
    display: grid;
    grid-auto-rows: 40px;
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
    /* background-color: Transparent;
    background-repeat: no-repeat; */
    color: white;
    font-size: 1.2rem;
    font-weight: 550;
    text-align: center;
    padding: 6px 0px 3px 0px;
    &:hover ${DropdownItem} {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
