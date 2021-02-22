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
    UserDisplayName,
    Picture,
    DisplayName,
} from "./styles/styledProfiles";

const Profiles = ({ user, setProfile }) => {
    // console.log("🚀 ~ file: Profiles.js ~ line 16 ~ Profiles ~ user", user.photoURL);
    // const src = user.photoURL;


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
                        <DisplayName>{user.displayName}</DisplayName>
                    </UserPicture>
                </User>

                <ProfilesButton>Manage Profiles</ProfilesButton>
            </ProfilesContainer>

        </Container>
    );
};

export default Profiles;
