function Button({onClick, className, children}) {
    return ( 
        <div onClick={onClick} className={className}>
            {children}
        </div>
    );
}

export default Button;