import React from 'react';
import styled from "styled-components/macro";
import { BrowseContainer } from '../Components';
import { useContent } from "../hooks";
import selectionFilter  from "../utils/selectionFilter";

const BrowseScreen = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter(series, films);
    // console.log("🚀 ~ file: BrowseScreen.js ~ line 9 ~ BrowseScreen ~ slides", slides)
    
    return (
        <ScreenContainer>
            <BrowseContainer slides={slides} />
        </ScreenContainer>
    );
};

export default BrowseScreen;

const ScreenContainer = styled.div``;