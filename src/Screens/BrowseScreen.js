import React from 'react';
import styled from "styled-components/macro";
import { BrowseContainer } from '../Components';
import { useContent } from "../hooks";
import selectionFilter  from "../utils/selectionFilter";

const BrowseScreen = () => {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter(series, films);
    
    return (
        <ScreenContainer>
            <BrowseContainer slides={slides} />
        </ScreenContainer>
    );
};

export default BrowseScreen;

const ScreenContainer = styled.div``;