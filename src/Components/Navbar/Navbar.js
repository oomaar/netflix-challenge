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
} from "./styles/styledNavbar";

const Navbar = () => {
    const [show, setShow] = useState(false);
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
            </SubContainer>

            <SubContainer className="invertSubContainer">
                <UserProfileContainer>
                    <UserProfile src={`/images/users/${user.photoURL}.png`} alt="Profile Picture" />
                    <ChevronDown src="/images/icons/chevron-right.png" alt="Chevron Down" />
                </UserProfileContainer>
                <GroupContainer>
                    <Icon src="/images/icons/notifications.png" alt="Notfications" />
                    <Icon src="/images/icons/redeem.png" alt="Gift" />
                    <Link>KIDS</Link>
                    <Icon src="/images/icons/search.png" alt="Search" />
                </GroupContainer>
            </SubContainer>
        </Container>
    );
};

export default Navbar;
