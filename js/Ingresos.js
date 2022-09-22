class Ingreso  extends Dato{
    static contadoIngresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadoIngresos;
    }
    get id(){
        return this._id;
    }
}
