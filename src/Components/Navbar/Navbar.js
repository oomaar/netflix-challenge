import { useEffect, useState } from 'react';
import { auth } from '../../lib/firebase';
import logo from "../../logo.svg";
import {
    Container,
    SubContainer,
    Netflix,
    LinksContainer,
    Link,
    GroupContainer,
    ChevronDown,
    UserProfileContainer,
    UserProfile,
    Icon,
    DropDown,
    BurgerContainer,
    BurgerIcon,
    BurgerIcons,
    ResponsiveContainer,
    ResponsiveLink,
    LinkHold,
    DisplayName,
    UsersContainer,
    DropLinks,
    DropLink,
    UserContainer,
    SearchInput
} from "./styles/styledNavbar";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const user = auth.currentUser || {};

    const transitionNavbar = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <Container className={`${show && 'blackNav'}`}>
            <SubContainer>
                <Netflix src={logo} alt="Netflix" />

                <LinksContainer>
                    <Link>Home</Link>
                    <Link>TV Shows</Link>
                    <Link>Movies</Link>
                    <Link>New & Popular</Link>
                    <Link>My List</Link>
                </LinksContainer>

                <ResponsiveContainer>
                    <BurgerIcons onClick={() => setResponsive(state => !state)}>
                        <BurgerIcon src="/images/icons/burger.png" alt="Responsive" />
                        <ChevronDown src="/images/icons/chevron-right.png" alt="Chevron Down" />
                    </BurgerIcons>
                    
                    {responsive && (
                        <BurgerContainer>
                            <LinkHold>
                                <ResponsiveLink>Home</ResponsiveLink>
                            </LinkHold>
                            <LinkHold>
                                <ResponsiveLink>TV Shows</ResponsiveLink>
                            </LinkHold>
                            <LinkHold>
                                <ResponsiveLink>Movies</ResponsiveLink>
                            </LinkHold>
                            <LinkHold>
                                <ResponsiveLink>New & Popular</ResponsiveLink>
                            </LinkHold>
                            <LinkHold>
                                <ResponsiveLink>My List</ResponsiveLink>
                            </LinkHold>
                        </BurgerContainer>
                    )}
                </ResponsiveContainer>
            </SubContainer>

            <SubContainer className="invertSubContainer">
                <UserProfileContainer>
                    <UserProfile src={`/images/users/${user.photoURL}.png`} alt="Profile Picture" />
                    <ChevronDown src="/images/icons/chevron-right.png" alt="Chevron Down" />
                    <DropDown>
                        <DropLinks className="above">
                            <UsersContainer>
                                <UserContainer>
                                    {/* manyUsers ? UserContainer.map */}
                                    <UserProfile src={`/images/users/${user.photoURL}.png`} alt="Profile Picture" />
                                    <DisplayName>{user.displayName}</DisplayName>
                                </UserContainer>
                            </UsersContainer>
                            <DropLink>Manage Profiles</DropLink>
                        </DropLinks>
                        <DropLinks>
                            <DropLink>Account</DropLink>
                            <DropLink>Help Center</DropLink>
                            <DropLink onClick={() => auth.signOut()}>Signout of Netflix</DropLink>
                        </DropLinks>
                    </DropDown>
                </UserProfileContainer>
                
                <GroupContainer>
                    <Icon src="/images/icons/notifications.png" alt="Notfications" />
                    <Icon src="/images/icons/redeem.png" alt="Gift" />
                    <Link>KIDS</Link>
                    <Icon src="/images/icons/search.png" alt="Search" />
                    <SearchInput type="text" placeholder="Titles,people,genres" />
                </GroupContainer>
            </SubContainer>
        </Container>
    );
};

export default Navbar;
