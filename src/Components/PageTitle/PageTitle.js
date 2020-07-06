import React from 'react';
import StyledWrapper from './pageTitle.style'
import { FaUser } from 'react-icons/fa'
import { IconContext } from "react-icons";

const PageTitle = (props) => {
    return (
        <StyledWrapper>
            <div className="pageTitle">
                <div className="iconBox">
                    <IconContext.Provider value={{ color: "grey", size: "2em", className: "icon" }}>
                        <div>
                            <FaUser />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="title">{props.title}</div>
            </div>
        </StyledWrapper>
    )

}

export default PageTitle;