import React from 'react';
import { _cs } from '@togglecorp/fujs';
import {
    Button,
    useModalState,
} from '@the-deep/deep-ui';

import RelatedOrdersModal from '#components/RelatedOrdersModal';

import { CourierPackage } from '../index';
import UpdatePackageModal from './UpdatePackageModal';
import RelatedBooksModal from './RelatedBooksModal';
import SchoolPackagesModal from './SchoolPackagesModal';
import styles from './styles.css';

export interface Props {
    className?: string;
    data: CourierPackage;
    disabled: boolean;
}

function Actions(props: Props) {
    const {
        className,
        data,
        disabled,
    } = props;

    const [
        updatePackageModalShown,
        showUpdatePackageModal,
        hideUpdatePackageModal,
    ] = useModalState(false);
    const [
        viewRelatedOrdersModalShown,
        showRelatedOrdersModal,
        hideRelatedOrdersModal,
    ] = useModalState(false);
    const [
        viewRelatedBooksModalShown,
        showRelatedBooksModal,
        hideRelatedBooksModal,
    ] = useModalState(false);
    const [
        viewSchoolPackagesModalShown,
        showSchoolPackagesModal,
        hideSchoolPackagesModal,
    ] = useModalState(false);

    return (
        <div className={_cs(className)}>
            <Button
                className={styles.button}
                name={undefined}
                title="Edit package"
                onClick={showUpdatePackageModal}
                disabled={disabled}
                variant="tertiary"
            >
                Edit
            </Button>
            <Button
                className={styles.button}
                name={undefined}
                title="View related orders"
                onClick={showRelatedOrdersModal}
                disabled={disabled}
                variant="tertiary"
            >
                Orders
            </Button>
            <Button
                className={styles.button}
                name={undefined}
                title="View related books"
                onClick={showRelatedBooksModal}
                disabled={disabled}
                variant="tertiary"
            >
                Books
            </Button>
            <Button
                className={styles.button}
                name={undefined}
                title="View school packages"
                onClick={showSchoolPackagesModal}
                disabled={disabled}
                variant="tertiary"
            >
                Schools
            </Button>
            {updatePackageModalShown && (
                <UpdatePackageModal
                    courierPackage={data}
                    onModalClose={hideUpdatePackageModal}
                />
            )}
            {viewRelatedOrdersModalShown && (
                <RelatedOrdersModal
                    packageItem={data}
                    onModalClose={hideRelatedOrdersModal}
                />
            )}
            {viewRelatedBooksModalShown && (
                <RelatedBooksModal
                    courierPackage={data}
                    onModalClose={hideRelatedBooksModal}
                />
            )}
            {viewSchoolPackagesModalShown && (
                <SchoolPackagesModal
                    schoolPackage={data}
                    onModalClose={hideSchoolPackagesModal}
                />
            )}
        </div>
    );
}

export default Actions;
