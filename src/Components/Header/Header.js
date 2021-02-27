import { Link } from 'react-router-dom';
import { Optionform } from '..';
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import {
    Container,
    Background,
    Netflix,
    Sigin,
    Feature,
    Title,
    Subtitle,
} from "./styles/styledHeader";

const Header = () => {
    return (
        <Container>
            <Background>
                <Netflix src={logo} alt="Netflix" />
                <Link to={ROUTES.SIGNIN}>
                    <Sigin>Sign in</Sigin>
                </Link>
                <Feature>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
                    <Optionform />
                </Feature>
            </Background>
        </Container>
    );
};

export default Header;
