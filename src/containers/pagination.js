import React from "react";
import { Pagination } from "../components/exports";

export function PaginationContainer({ handleNextPage, handlePrevPage, page, movies }) {
    return movies.length > 0 ? (
        <Pagination>
            <Pagination.Wrapper>
                <Pagination.Button onClick={handlePrevPage} disabled={page === 1}>
                    prev
                </Pagination.Button>
                <Pagination.PageText>{page}</Pagination.PageText>
                <Pagination.Button onClick={handleNextPage} disabled={movies.length < 20}>
                    next
                </Pagination.Button>
            </Pagination.Wrapper>
        </Pagination>
    )
        : null
}
