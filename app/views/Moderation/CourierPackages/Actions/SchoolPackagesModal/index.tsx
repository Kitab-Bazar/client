import React, { useCallback, useMemo } from 'react';
import {
    gql,
    useQuery,
} from '@apollo/client';
import {
    ListView,
    Modal,
} from '@the-deep/deep-ui';

import {
    CourierSchoolPackagesQuery,
    CourierSchoolPackagesQueryVariables,
} from '#generated/types';
import { SchoolPackage } from '#views/Moderation/SchoolPackages';

import styles from './styles.css';

const COURIER_SCHOOL_PACKAGES = gql`
    query CourierSchoolPackages($id: ID!) {
        courierPackage(id: $id) {
            schoolPackages {
                results {
                    school {
                        canonicalName
                        id
                    }
                }
            }
        }
    }
`;
function SchoolRenderer({ school }: { school: string }) {
    return (
        <div className={styles.schoolPackageList}>
            {school}
        </div>
    );
}

type SchoolPackageBook = NonNullable<NonNullable<NonNullable<CourierSchoolPackagesQuery['courierPackage']>['schoolPackages']>['results']>[number];

function keySelector(d: SchoolPackageBook) {
    return d.school.id;
}
interface Props {
    schoolPackage: SchoolPackage;
    onModalClose: () => void;
}

function SchoolPackages(props: Props) {
    const {
        schoolPackage,
        onModalClose,
    } = props;

    const variables = useMemo(() => ({
        id: schoolPackage.id,
    }), [schoolPackage.id]);

    const {
        data: schoolPackageResponse,
        loading: schoolPackageLoading,
        error: schoolPackageError,
    } = useQuery<CourierSchoolPackagesQuery, CourierSchoolPackagesQueryVariables>(
        COURIER_SCHOOL_PACKAGES,
        {
            variables,
        },
    );

    const schoolPackageItemRendererParams = useCallback((
        _: string,
        d: SchoolPackageBook,
    ) => ({
        school: d.school.canonicalName,
    }), []);

    return (
        <Modal
            className={styles.relatedBooksModal}
            backdropClassName={styles.modalBackdrop}
            onCloseButtonClick={onModalClose}
            heading="List of Schools"
        >
            <ListView
                className={styles.bookItemList}
                data={schoolPackageResponse?.courierPackage?.schoolPackages?.results}
                rendererParams={schoolPackageItemRendererParams}
                renderer={SchoolRenderer}
                keySelector={keySelector}
                errored={!!schoolPackageError}
                filtered={false}
                pending={schoolPackageLoading}
                messageShown
            />
        </Modal>
    );
}
export default SchoolPackages;
