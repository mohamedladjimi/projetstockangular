import { Reclamation } from "./reclamation";

export class Fournisseur{
        constructor(
                    public idFournisseur:number,
                    public adresse:string,
                    public code:string,
                    public email:string,
                    public image:string,
                    public libelle: string,
                    public numtel:string,
                    public reclamations:Reclamation[]
                    )
                    {
                    
        
}

}