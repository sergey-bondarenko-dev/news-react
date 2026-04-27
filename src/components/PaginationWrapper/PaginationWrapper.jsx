import Pagination from '../Pagination';

const PaginationWrapper = (props) => {
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
