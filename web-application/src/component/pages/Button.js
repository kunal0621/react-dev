function Button({onClick, className, children, isAllInput}) {
    return ( 
        <div onClick={onClick} className={className} disabled={isAllInput}>
            {children}
        </div>
    );
}

export default Button;