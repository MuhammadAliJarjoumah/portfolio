import { IconPrefix } from "@fortawesome/angular-fontawesome"
import { IconName } from "@fortawesome/fontawesome-svg-core"

export class FontAwesomeIcon {
    iconName: IconName | (string & {});
    iconPrefix?: IconPrefix = 'fas';
}