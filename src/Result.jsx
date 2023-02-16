import React from "react";

const Result = (props) => {

    if(props.score === 0){
        return(<h1>congrats you are not addicted!</h1>);
    }
    else{
        return(<h1>congrats you are addicted!</h1>);
    }
}

export default Result;