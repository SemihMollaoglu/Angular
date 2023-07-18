export class TodoItem {
    //task?: string;
    //isDone?: boolean;

    constructor(public task?:string,public isDone?:boolean)
    {

    }
    /*
    !Typescript dilinin bir kolaylığı constructor üzerinden public parametre kullandığınızda; o parametreyi field haline getirirsiniz.
    */
}