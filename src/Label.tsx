import React from "react";

interface LabelProps {
    text: string
}

const Label: React.FC<LabelProps> = (props) => {
    return (
        <p>{props.text}</p>
    )
}

export default Label;