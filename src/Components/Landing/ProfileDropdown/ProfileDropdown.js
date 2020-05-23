import React from "react";
import Dropdown from "../../../UI/Dropdown/Dropdown";

const ProfileDropdown = React.memo(() => {
    return (
        <React.Fragment>
            <Dropdown>
                {[
                    [
                        <i
                            style={{ marginRight: 10 + "px" }}
                            className="fas fa-user-circle"
                        ></i>,
                        "Profile",
                    ],
                    [
                        <i
                            style={{ marginRight: 10 + "px" }}
                            className="fas fa-cog"
                        ></i>,
                        "Settings",
                    ],
                    [
                        <i
                            style={{
                                marginRight: 10 + "px",
                                paddingLeft: 5 + "px",
                            }}
                            className="fas fa-question"
                        ></i>,
                        "Help",
                    ],
                ]}
            </Dropdown>
        </React.Fragment>
    );
});

export default ProfileDropdown;
