import { CategorieClient } from "./CategorieClient";
import { Profession } from "./Profession";

export class Client {
    idClient?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    password?: string;
    dateNaissance?: string;
    profession?: Profession;
    categorieClient?: CategorieClient;
    factures?: string;
}