import Button from "./Button";
import Errors from "./Errors";

function Form({title, handleInput, handleSave, error}) {
    return (
        <form>
            <h3>{title}</h3>
            <Errors message={error} />
            <div className="form-group">
                <label>SquadName:</label>
                <input type="text" name="squadName" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>FileName:</label>
                <input type="text" name="fileName" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Member:</label>
                <input type="text" name="member" onChange={handleInput} />
            </div>
            <div className="form-group">
                <label>Status:</label>
                <input type="text" name="active" onChange={handleInput} />
            </div>
            <Button className="sucess" onClick={handleSave}>Save</Button>
        </form>
    );
}

export default Form;