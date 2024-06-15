function Errors({message}) {
    return ( 
        message ? <div className="error">{message}</div> : null
    );
}

export default Errors;