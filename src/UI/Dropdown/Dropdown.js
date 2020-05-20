import React from "react";
import { DropdownWrapper, DropdownItem } from "./DropdownCSS";

const Dropdown = (props) => {
    return (
        <DropdownWrapper>
            {props.children.map((item, index) => {
                return <DropdownItem key={index}>{item}</DropdownItem>;
            })}
        </DropdownWrapper>
    );
};

export default Dropdown;
