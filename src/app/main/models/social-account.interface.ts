import { FontAwesomeIcon } from "../../shared/font-awesome-icons/font-awesome-icon.model";

export interface ISocialAccount {
    faIcon: FontAwesomeIcon;//may cause type error?
    name: string;
    url: string;
}