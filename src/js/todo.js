export default class Todo {
    constructor (name = "", desc = "", prio = "1", deadline, interest) {
        this.name = name;
        this.desc = desc;
        this.prio = prio;
        this.deadline = deadline;
        this.interest = interest;
    }
    get name ()     { return this._name; }
    get desc ()     { return this._desc; }
    get prio ()     { return this._prio; }
    get deadline () { return this._deadline; }
    get interest () { return this._interest; }
    set name (newName)          { this._name = newName; }
    set desc (newDesc)          { this._desc = newDesc; }
    set prio (newPrio)          { this._prio = newPrio; }
    set deadline (newDeadline)  { this._deadline = newDeadline; }
    set interest (newInterest)  { this._interest = newInterest; }
}