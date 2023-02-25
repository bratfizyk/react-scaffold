import React from "react"
import Label from "./Label";

const Hello: React.FC = () => {
    return (
        <div>
            <Label text="Mój test" />
            <Label text="Mój inny test" />
        </div>
    )
}

export default Hello;