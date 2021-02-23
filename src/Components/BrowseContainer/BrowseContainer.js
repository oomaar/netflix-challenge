import { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import { Loading, Profiles, Navbar } from '..';
import { auth } from '../../lib/firebase';
import { Background } from '../Header/styles/styledHeader';

const BrowseContainer = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const user = auth.currentUser || {};

    useEffect(() => {
        // console.log("🚀 ~ file: BrowseContainer.js ~ line 7 ~ BrowseContainer ~ profile", profile)
        setTimeout(() => setLoading(false), 3000);
    }, [profile, profile.displayName]);

    return profile.displayName ? (
        <ScreenContainer>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : <Loading.ReleaseBody />}

            <Background className="browseContainer__background">
                <Navbar />
            </Background>
        </ScreenContainer>
    ) : (
            <Profiles user={user} setProfile={setProfile} />
        )
};

export default BrowseContainer;

const ScreenContainer = styled.div`
    background: #121212;
    height: 100vh;
`;