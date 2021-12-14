import { Fournisseur } from "./fournisseur";

export class Reclamation{
    constructor(
                public idReclamation:number,
                public dateReclamation:Date,
                public description:string,
                public fournisseur:Fournisseur,
                public objet:string,
                )
                {
                
    
}

}