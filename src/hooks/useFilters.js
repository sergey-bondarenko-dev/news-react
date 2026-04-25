import { useState } from "react";
import { PAGE_SIZE } from "../constants";

export const useFilters = () => {
    const [filters, setFilters] = useState({
        pageNumber: 1,
        pageSize: PAGE_SIZE,
        category: null,
        keywords: '',
    });
    
    const changeFilter = (key, value) => {
        setFilters((prev) => {
            return {...prev, [key]: value};
        });
    }

    return { filters, changeFilter };
}