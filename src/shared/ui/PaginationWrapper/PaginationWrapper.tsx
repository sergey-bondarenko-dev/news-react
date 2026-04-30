import React from 'react';
import Pagination from '../Pagination';
import { IPaginationProps } from '@/shared/interfaces';

interface Props {
    top?: boolean,
    bottom?: boolean,
    children: React.ReactNode,
}

const PaginationWrapper = (props: Props & IPaginationProps) => {
    const {
        top,
        bottom,
        children,
        ...paginationProps
    } = props;

    return (
        <>
        {top && <Pagination {...paginationProps} />}
        {children}
        {bottom && <Pagination {...paginationProps} />}
        </>
    );
}

export default PaginationWrapper;
