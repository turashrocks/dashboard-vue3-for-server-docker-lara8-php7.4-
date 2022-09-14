import {Department} from "@/classes/department";
import {Entity} from "@/interfaces/entity";

export class Student implements Entity {
    id: number;
    name: string;
    batch_name: string;
    department: Department;

    constructor(id = 0, name = '', batch_name = '',department = new Department()) {
        this.id = id;
        this.name = name;
        this.batch_name = batch_name;
        this.department = department;
    }

    // get name() {
    //     return this.name;
    // }

    // canView(page: string) {
    //     return this.permissions.some(p => p === `view_${page}`);
    // }

    // canEdit(page: string) {
    //     return this.permissions.some(p => p === `edit_${page}`);
    // }
}
