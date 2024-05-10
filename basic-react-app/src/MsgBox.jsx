function MsgBox( { userName, textColor } ){
    let styling = { color : textColor}
    
    return(
        <h1 style={styling}>Hello, {userName} </h1>
    );
}

export default MsgBox;