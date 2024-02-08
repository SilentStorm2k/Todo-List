export default class Todo {
    constructor (name = "", desc = "", prio = "1", deadline, interest) {
        this.name = name;
        this.desc = desc;
        this.prio = prio;
        this.deadline = deadline;
        this.interest = interest;
    }
    changeName (name) {
        this.name = name;
    }
    changeDesc (desc) {
        this.desc = desc;
    }
    changePrio (prio) {
        this.prio = prio;
    }
    changeDeadline (deadline) {
        this.deadline = deadline;
    }
    changeInterest (interest) {
        this.interest = interest;
    }
}