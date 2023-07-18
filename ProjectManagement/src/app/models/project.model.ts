import { Task } from "./task.model";

export class Project {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public startDate?: Date,
        public complatedPercent?: number,
        public tasks?: Task[],
        public departmentId?: number) {

    }
}