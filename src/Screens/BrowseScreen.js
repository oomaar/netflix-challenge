import React from 'react';
import { useContent } from "../hooks";
import selectionFilter  from "../utils/selectionFilter";

const BrowseScreen = () => {
    const { series } = useContent('series');
    const { films } = useContent('films')
    const slides = selectionFilter(series, films);
    console.log("🚀 ~ file: BrowseScreen.js ~ line 9 ~ BrowseScreen ~ slides", slides)
    
    return (
        <div>
            <h1>Browse Screen</h1>
        </div>
    );
};

export default BrowseScreen;
