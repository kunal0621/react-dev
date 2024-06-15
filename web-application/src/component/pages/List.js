import Cards from "./Cards";

function List({ data }) {
    return (
        data ? (
            <div className="list">
                {data.map(item => {
                    return <Cards 
                        _id={item.id}
                        squadName={item.squadName}
                        member={item.member}
                        active={item.active}
                    />
                })}
            </div>
        ) : <div className="list"></div>
    );
}

export default List;