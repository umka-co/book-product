import { FunctionComponent } from 'react';
import Button from '../Button';

const MARGIN_BETWEEN_MENU_ITEMS = '0.125rem'; // TODO: Set own value here

interface Props {
  activeClassName?: string;
  marginForButton?: string;
}

/**
 * Content of the Header's Menu
 * @component TopMenuContent
 * @param {string} [activeClassName] - the CSS class for the active menu item
 * @param {string} [marginForButton] - the margin between menu items
 */
const TopMenuContent: FunctionComponent<Props> = ({ activeClassName, marginForButton = MARGIN_BETWEEN_MENU_ITEMS }) => {
  return (
    <ul role="menu">
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/book/" margin={marginForButton} variant="text">
          Книга
        </Button>
      </li>
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/table-of-contents/" margin={marginForButton} variant="text">
          Оглавление
        </Button>
      </li>
      <li role="menuitem">
        <Button activeClassName={activeClassName} href="/about-book/" margin={marginForButton} variant="text">
          История
        </Button>
      </li>
    </ul>
  );
};

export default TopMenuContent;
