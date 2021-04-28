import React from "react";
import { SearchBar } from "../components/exports";

export function SearchBarContainer({ handleSubmit, handleInputChange }) {
    return (
        <SearchBar>
            <SearchBar.Wrapper>
                <SearchBar.Form onSubmit={handleSubmit}>
                    <SearchBar.Title>
                        Welcome,<br />
                        thousands of movies, TV shows and other media to discover. Explore now.
                </SearchBar.Title>
                    <SearchBar.Input
                        type="text"
                        placeholder="movies, TV shows, etc."
                        onChange={handleInputChange}
                    />
                    <SearchBar.Button type="submit">Search</SearchBar.Button>
                </SearchBar.Form>
            </SearchBar.Wrapper>
        </SearchBar>
    )
}
