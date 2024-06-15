function Cards({
    _id,
    squadName,
    member,
    active
}) {
    return (
        <div className="card" id={_id}>
            <div className="card-header">Team name: {squadName}</div>
            <label>Member:</label>
            {member.map(item => {
                return <div className="player details" id={item}>{item}</div>
            })}
            {active ? <div className="active-status">Status: {active.toString()}</div> : <div className="inactive">Status: {active.toString()}</div>}
        </div>
    );
}

export default Cards;