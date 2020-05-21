import React from "react";
import { DropdownWrapper, DropdownItem } from "./DropdownCSS";

const Dropdown = (props) => {
    return (
        <DropdownWrapper>
            {props.children.map((children, index) => {
                return (
                    <DropdownItem key={index}>
                        {children.map((child, index) => (
                            <span key={index}>{child}</span>
                        ))}
                    </DropdownItem>
                );
            })}
        </DropdownWrapper>
    );
};

export default Dropdown;
