import React, { useMemo, useState } from 'react';
import { _cs, isDefined } from '@togglecorp/fujs';
import {
    Container,
    Pager,
    SelectInput,
    TableView,
    TableColumn,
    TableHeaderCell,
    TableHeaderCellProps,
    createStringColumn,
    createNumberColumn,
} from '@the-deep/deep-ui';
import { useQuery, gql } from '@apollo/client';

import {
    CourierPackagesQuery,
    CourierPackagesQueryVariables,
    CourierPackageOptionsWithTypeQuery,
    CourierPackageOptionsWithTypeQueryVariables,
} from '#generated/types';

import OrderWindowMultiSelectInput, { SearchOrderWindowType } from '#components/OrderWindowMultiSelectInput';
import { enumKeySelector, enumLabelSelector } from '#utils/types';
import useStateWithCallback from '#hooks/useStateWithCallback';

import Actions, { Props as ActionsProps } from './Actions';
import styles from './styles.css';

export type CourierPackage = NonNullable<NonNullable<CourierPackagesQuery['courierPackages']>['results']>[number];
function packageKeySelector(courierPackage: CourierPackage) {
    return courierPackage.id;
}
interface Props {
    className?: string;
}

const COURIER_PACKAGE_OPTIONS_WITH_TYPE = gql`
    query CourierPackageOptionsWithType {
        courierPackageStatusOptions: __type(name: "CourierPackageStatusEnum") {
            enumValues {
                name
                description
            }
        }
        courierPackageTypeOptions: __type(name: "CourierPackageTypeEnum") {
            enumValues {
                name
                description
            }
        }
    }
`;

const COURIER_PACKAGES = gql`
    query CourierPackages($page: Int, $pageSize: Int, $status: [CourierPackageStatusEnum!], $type: [CourierPackageTypeEnum!], $orderWindows: [ID!]) {
        courierPackages(page: $page, pageSize: $pageSize, status: $status, type: $type, orderWindows: $orderWindows) {
            page
            pageSize
            totalCount
            results {
                id
                packageId
                status
                statusDisplay
                totalPrice
                totalQuantity
                type
                typeDisplay
                municipality {
                    name
                }
                relatedOrders {
                    id
                    statusDisplay
                    totalPrice
                    totalQuantity
                    orderCode
                }
            }
        }
    }
`;

function CourierPackages(props: Props) {
    const { className } = props;
    const [activePage, setActivePage] = useState<number>(1);
    const [maxItemsPerPage, setMaxItemsPerPage] = useStateWithCallback(10, setActivePage);
    const [statusFilter, setStatusFilter] = useStateWithCallback<string | undefined>(
        undefined,
        setActivePage,
    );
    const [typeFilter, setTypeFilter] = useStateWithCallback<string | undefined>(
        undefined,
        setActivePage,
    );
    const [orderWindowFilter, setOrderWindowFilter] = useState<string[] | undefined>();
    const [
        orderWindowOptions,
        setOrderWindowOptions,
    ] = useState<SearchOrderWindowType[] | undefined | null>();

    const variables = useMemo(() => ({
        pageSize: maxItemsPerPage,
        page: activePage,
        status: statusFilter as CourierPackagesQueryVariables['status'],
        type: typeFilter as CourierPackagesQueryVariables['type'],
        orderWindows: orderWindowFilter,
    }), [
        maxItemsPerPage,
        activePage,
        statusFilter,
        typeFilter,
        orderWindowFilter,
    ]);

    const {
        data: courierPackageOptionsQuery,
        loading: courierPackageOptionsQueryLoading,
    } = useQuery<CourierPackageOptionsWithTypeQuery, CourierPackageOptionsWithTypeQueryVariables>(
        COURIER_PACKAGE_OPTIONS_WITH_TYPE,
    );

    const {
        data: courierPackagesResponse,
        loading: courierPackagesLoading,
        error,
    } = useQuery<CourierPackagesQuery, CourierPackagesQueryVariables>(
        COURIER_PACKAGES,
        { variables },
    );

    const columns = useMemo(() => {
        const actionsColumn: TableColumn<
            CourierPackage,
            string,
            ActionsProps,
            TableHeaderCellProps
        > = {
            id: 'actions',
            title: '',
            headerCellRenderer: TableHeaderCell,
            headerCellRendererParams: {
                sortable: false,
            },
            cellRenderer: Actions,
            cellRendererClassName: styles.actions,
            cellRendererParams: (_, data) => ({
                data,
                disabled: courierPackagesLoading,
            }),
            columnWidth: 470,
        };

        return [
            createStringColumn<CourierPackage, string>(
                'id',
                'ID',
                (item) => item.id,
                { columnWidth: 70 },
            ),
            createStringColumn<CourierPackage, string>(
                'packageId',
                'Package ID',
                (item) => item.packageId,
            ),
            createStringColumn<CourierPackage, string>(
                'type',
                'Type',
                (item) => item.typeDisplay,
            ),
            createStringColumn<CourierPackage, string>(
                'status',
                'Status',
                (item) => item.statusDisplay,
            ),
            createNumberColumn<CourierPackage, string>(
                'totalPrice',
                'Price',
                (item) => item.totalPrice,
            ),
            createNumberColumn<CourierPackage, string>(
                'totalQuantity',
                'Quantity',
                (item) => item.totalQuantity,
            ),
            createStringColumn<CourierPackage, string>(
                'municipality',
                'Municipality',
                (item) => item.municipality.name,
            ),
            actionsColumn,
        ];
    }, [courierPackagesLoading]);

    const filtered = isDefined(statusFilter);

    return (
        <Container
            className={_cs(styles.courierPackages, className)}
            heading="Courier Packages"
            headingSize="small"
            footerActions={(
                <Pager
                    activePage={activePage}
                    itemsCount={courierPackagesResponse?.courierPackages?.totalCount ?? 0}
                    maxItemsPerPage={maxItemsPerPage}
                    onItemsPerPageChange={setMaxItemsPerPage}
                    onActivePageChange={setActivePage}
                />
            )}
            headerDescriptionClassName={styles.filters}
            headerDescription={(
                <>
                    <SelectInput
                        className={styles.filterInput}
                        name="status"
                        label="Status"
                        placeholder="All"
                        keySelector={enumKeySelector}
                        labelSelector={enumLabelSelector}
                        options={
                            courierPackageOptionsQuery?.courierPackageStatusOptions?.enumValues
                        }
                        value={statusFilter}
                        onChange={setStatusFilter}
                        disabled={courierPackageOptionsQueryLoading}
                        variant="general"
                    />
                    <SelectInput
                        className={styles.filterInput}
                        name="type"
                        label="Courier Type"
                        placeholder="All"
                        keySelector={enumKeySelector}
                        labelSelector={enumLabelSelector}
                        options={
                            courierPackageOptionsQuery?.courierPackageTypeOptions?.enumValues
                        }
                        value={typeFilter}
                        onChange={setTypeFilter}
                        disabled={courierPackageOptionsQueryLoading}
                        variant="general"
                    />
                    <OrderWindowMultiSelectInput
                        name="orderWindows"
                        label="Order Windows"
                        variant="general"
                        onChange={setOrderWindowFilter}
                        value={orderWindowFilter}
                        options={orderWindowOptions}
                        onOptionsChange={setOrderWindowOptions}
                    />
                </>
            )}
        >
            <TableView
                className={styles.table}
                data={courierPackagesResponse?.courierPackages?.results}
                keySelector={packageKeySelector}
                emptyMessage="No packages available."
                columns={columns}
                filtered={filtered}
                errored={!!error}
                pending={courierPackagesLoading}
                erroredEmptyMessage="Failed to fetch packages."
                filteredEmptyMessage="No matching packages found."
                messageShown
            />
        </Container>
    );
}

export default CourierPackages;
