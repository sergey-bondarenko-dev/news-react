import { DirectionType, SkeletonType } from "@/interfaces";
import Skeleton from "../../components/Skeleton";
import React from "react";

interface Props {
    isLoading: boolean;
}

export function withSkeleton<P extends object>(
    Component: React.ComponentType<P>,
    type: SkeletonType, 
    count: number, 
    direction: DirectionType = 'column'
) {
    return function WithSkeleton(props: Props & P) {
        const {
            isLoading,
            ...rest
        } = props;

        if (isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }

        return <Component {...rest as P} />
    }
}
