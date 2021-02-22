import { useState, useEffect } from 'react';
import styled from "styled-components/macro";
import { Profiles } from '..';
import { auth } from '../../lib/firebase';

const BrowseContainer = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const user = auth.currentUser || {};
    
    useEffect(() => {
        console.log("🚀 ~ file: BrowseContainer.js ~ line 7 ~ BrowseContainer ~ profile", profile)
        setTimeout(() => setLoading(false), 3000);
    }, [profile.displayName]);

    return (
        <ScreenContainer>
            <Profiles user={user} setProfile={setProfile} />
        </ScreenContainer>
    );
};

export default BrowseContainer;

const ScreenContainer = styled.div``;