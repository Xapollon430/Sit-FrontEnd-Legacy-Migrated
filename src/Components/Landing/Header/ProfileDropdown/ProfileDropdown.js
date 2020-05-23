import React from "react";
import { DropdownWrapper, DropdownItem } from "../HeaderCss";

const ProfileDropdown = React.memo(() => {
    return (
        <DropdownWrapper>
            <DropdownItem>
                <i className="fas fa-user-circle"></i> Profile
            </DropdownItem>
            <DropdownItem>
                <i className="fas fa-cog"></i> Settings
            </DropdownItem>
            <DropdownItem>
                <i className="fas fa-question"></i> Help
            </DropdownItem>
        </DropdownWrapper>
    );
});

export default ProfileDropdown;
