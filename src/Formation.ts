export class Formation{

    _nom:string;
    _description:string;

    constructor(nom:string, description:string){
        this._nom=nom;
        this._description=description;
    }

    get nom(){return this._nom}
    set nom(nom){this._nom=nom}
    get descpription(){return this._description}
    set description(descpription){this._description=descpription}
}