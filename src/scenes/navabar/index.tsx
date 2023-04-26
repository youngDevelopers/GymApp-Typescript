import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import NavBarLink from "./NavBarLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

interface Props {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);//as default it is not clicked hence false
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");//this wil notify us by giving a boolean if we currently above or below this week
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";//Setting style for scroll positi-on
    console.log(isAboveMediumScreens)

    return (
      <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6 `}>
            <div className={`${flexBetween} w-full gap-16`}>
              {/*left side of the nav */}
              <img alt="logo" src={Logo} />

              {/*Right side */}
              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  {/**left side of the right side */}
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <NavBarLink
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavBarLink
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavBarLink
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <NavBarLink
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  {/**Right side of right side */}
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      Become a Member
                    </ActionButton>
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/**Mobile menu view */}
        {/**If media screen is  only below 1060px and MenuIcon Clicked we should be able to see the menu */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed bottom-0 right-0 z-40 h-full w-[300px]  bg-primary-100 drop-shadow-xl">
            {/**Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {/**Menu Items */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <NavBarLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavBarLink
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavBarLink
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavBarLink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </nav>
    );
}

export default Navbar;
