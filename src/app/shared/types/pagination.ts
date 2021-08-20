export interface Pagination {
    offset: number;
    limit: number;
}

export type Pageable<T = {}> = T & Pagination;