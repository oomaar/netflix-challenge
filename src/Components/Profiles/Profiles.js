import React from 'react';
import logo from "../../logo.svg";
import { Netflix } from '../Header/styles/styledHeader';
import {
    Container,
    FrontEnd,
    Title,
    ProfilesContainer,
    ProfilesButton,
    User,
    UserPicture,
    Picture,
    DisplayName,
} from "./styles/styledProfiles";

const Profiles = ({ user, setProfile }) => {
    return (
        <Container>
            <FrontEnd />
            <Netflix className="profiles__logo" src={logo} alt="Netflix" />

            <ProfilesContainer>
                <Title>Who's watching?</Title>

                <User>
                    <UserPicture onClick={() => setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    })}>
                        <Picture src={user.photoURL ? `/images/users/${user.photoURL}.png` : `/images/misc/loading.gif`} />
                        <DisplayName onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                        })}>{user.displayName}</DisplayName>
                    </UserPicture>
                </User>

                <ProfilesButton>Manage Profiles</ProfilesButton>
            </ProfilesContainer>

        </Container>
    );
};

export default Profiles;
