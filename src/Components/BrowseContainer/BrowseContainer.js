import { useState, useEffect } from 'react';
import { Loading, Profiles, Navbar } from '..';
import { auth } from '../../lib/firebase';
import { Background } from '../Header/styles/styledHeader';
import {
    Container,
    Banner,
    MovieTitle,
    MovieInfo,
    Buttons,
    PlayButton,
    ButtonIcon,
    InfoButton,
} from "./styles/styledBrowseContainer";

const BrowseContainer = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const user = auth.currentUser || {};

    useEffect(() => {
        // console.log("🚀 ~ file: BrowseContainer.js ~ line 7 ~ BrowseContainer ~ profile", profile)
        setTimeout(() => setLoading(false), 3000);
    }, [profile, profile.displayName]);

    return profile.displayName ? (
        <Container>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : <Loading.ReleaseBody />}

            <Background className="browseContainer__background">
                <Navbar />

                <Banner>
                    <MovieTitle>Watch Paranormal Now</MovieTitle>
                    <MovieInfo>
                        After a skeptical hematologist is plunged into a series of inexplicable events,
                        he unwillingly becomes the go-to-guy for paranormal investigations.
                    </MovieInfo>
                    <Buttons>
                        <PlayButton>
                            <ButtonIcon src="/images/icons/play.png" alt="Play Button" />
                        Play
                    </PlayButton>
                        <InfoButton>
                            <ButtonIcon src="/images/icons/info.png" alt="info Button" />
                        More info
                    </InfoButton>
                    </Buttons>
                </Banner>

            </Background>
        </Container>
    ) : (
            <Profiles user={user} setProfile={setProfile} />
        )
};

export default BrowseContainer;
