import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from "@/shared/types";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const NavBarLink = ({page, selectedPage, setSelectedPage}: Props) => {

    //this is to set the name of the page as the id 
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage //converting type string to SelectedPage type

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300s
            `}
            href={`#${lowerCasePage}`}
            onClick={ () => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default NavBarLink
