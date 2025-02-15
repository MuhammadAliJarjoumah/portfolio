import { FontAwesomeIcon } from "../../shared/font-awesome-icons/font-awesome-icon.model";

export type ISkill = {
    title: string;
    level: string;//should be enum
    // svgIcon: null;
    faIcon: FontAwesomeIcon;
} |
{
    title: string;
    level: string;//should be enum
    svgIcon: string;
    // faIcon: null;
}