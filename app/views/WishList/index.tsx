import React, {
    useCallback,
    useState,
} from 'react';
import {
    Button,
    Container,
    ListView,
    Message,
    NumberInput,
    TextOutput,
    useAlert,
} from '@the-deep/deep-ui';
import {
    gql,
    useQuery,
    useMutation,
} from '@apollo/client';
import { IoTrash, IoCart } from 'react-icons/io5';
import { isDefined } from '@togglecorp/fujs';

import {
    CreateCartMutation,
    CreateCartMutationVariables,
    RemoveWishListMutation,
    RemoveWishListMutationVariables,
    WishListQuery,
    WishListQueryVariables,
} from '#generated/types';

import styles from './styles.css';

const WISH_LIST = gql`
query WishList($pageSize: Int!, $page: Int!) {
    wishList(pageSize: $pageSize, page: $page) {
        results {
            id
            book {
                id
                isbn
                authors {
                    id
                    name
                }
                price
                title
                language
                image {
                    url
                }
            }
        }
        pageSize
        page
    }
}
`;

const REMOVE_WISH_LIST = gql`
mutation RemoveWishList($id: ID!) {
    deleteWishlist(id: $id) {
        errors
        ok
    }
}
`;

const CREATE_CART = gql`
mutation CreateCart($id: String!, $quantity: Int!) {
    createCartItem(data: { book: $id, quantity: $quantity }) {
        errors
        ok
    }
}
`;

type Wish = NonNullable<NonNullable<WishListQuery['wishList']>['results']>[number]
const wishKeySelector = (w: Wish) => w.id;

interface WishProps {
    wish: Wish;
    onRemoveWishList: (id: string) => void;
    onCreateCart: (id: string, quantity: number) => void;
}

function WishListItem(props: WishProps) {
    const {
        wish,
        onRemoveWishList,
        onCreateCart,
    } = props;

    const {
        id,
        book,
    } = wish;

    const {
        id: bookId,
        price,
        authors,
        title,
        image,
    } = book;

    const [
        quantity,
        setQuantity,
    ] = useState<number | undefined>(0);

    const handleAddToCart = useCallback(() => {
        if (isDefined(quantity) && quantity > 0) {
            onCreateCart(bookId, quantity);
        }
    }, [quantity, bookId, onCreateCart]);

    const authorsDisplay = React.useMemo(() => (
        authors?.map((d) => d.name).join(', ')
    ), [authors]);

    return (
        <Container
            className={styles.container}
            heading={title}
            headingSize="small"
            footerActions={(
                <>
                    <Button
                        name={bookId}
                        onClick={handleAddToCart}
                        variant="secondary"
                        icons={<IoCart />}
                    >
                        Add to cart
                    </Button>
                    <Button
                        name={id}
                        onClick={onRemoveWishList}
                        variant="secondary"
                        icons={<IoTrash />}
                    >
                        Remove
                    </Button>
                </>
            )}
            contentClassName={styles.content}
        >
            <div className={styles.imageContainer}>
                {image?.url ? (
                    <img
                        className={styles.image}
                        src={image.url}
                        alt={title}
                    />
                ) : (
                    <Message
                        message="Preview not available"
                    />
                )}
            </div>
            <div className={styles.details}>
                <TextOutput
                    label="Author"
                    value={authorsDisplay}
                />
                <TextOutput
                    label="Price (NPR)"
                    valueType="number"
                    value={price}
                />
                <NumberInput
                    label="Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={setQuantity}
                />
            </div>
        </Container>
    );
}

function WishList() {
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const alert = useAlert();

    const {
        data,
        refetch,
        loading,
    } = useQuery<WishListQuery, WishListQueryVariables>(
        WISH_LIST,
        {
            variables: {
                page,
                pageSize,
            },
            onCompleted: (res: WishListQuery) => {
                setPage(res.wishList?.page ? res.wishList.page : page);
                setPageSize(res.wishList?.pageSize ? res.wishList.pageSize : pageSize);
            },
        },
    );

    const [
        deleteWishlist,
    ] = useMutation<RemoveWishListMutation, RemoveWishListMutationVariables>(
        REMOVE_WISH_LIST,
        {
            onCompleted: (response) => {
                refetch();
                if (response?.deleteWishlist?.ok) {
                    alert.show(
                        'Item deleted from wishlist successfully',
                        {
                            variant: 'success',
                        },
                    );
                } else {
                    alert.show(
                        'Failed to delete item from wishlist',
                        {
                            variant: 'error',
                        },
                    );
                }
            },
            onError: () => {
                alert.show(
                    'Failed to delete item from wishlist',
                    {
                        variant: 'error',
                    },
                );
            },
        },
    );

    const [
        createCartItem,
    ] = useMutation<CreateCartMutation, CreateCartMutationVariables>(
        CREATE_CART,
        {
            onCompleted: (response) => {
                if (response?.createCartItem?.ok) {
                    alert.show(
                        'The book was successfully added to your cart.',
                        {
                            variant: 'success',
                        },
                    );
                    // TODO: Delete book from wishlist from backend after item is added
                    refetch();
                } else {
                    alert.show(
                        'There was an error while adding this to your cart. It might already be there.',
                        {
                            variant: 'success',
                        },
                    );
                    // TODO: Delete book from wishlist from backend after item is added
                    refetch();
                }
            },
        },
    );
    const addToCart = useCallback((id: string, quantity: number) => {
        createCartItem({
            variables: {
                id,
                quantity,
            },
        });
    }, [createCartItem]);

    const deleteBook = useCallback((id: string) => {
        deleteWishlist({
            variables: {
                id,
            },
        });
    }, [deleteWishlist]);

    const wishes = data?.wishList?.results;

    const wishItemRendererParams = React.useCallback((_, d: Wish) => ({
        wish: d,
        onRemoveWishList: deleteBook,
        onCreateCart: addToCart,
    }), [deleteBook, addToCart]);

    return (
        <Container
            className={styles.wishlist}
            heading="My Wishlist"
        >
            <ListView
                data={wishes ?? undefined}
                keySelector={wishKeySelector}
                rendererParams={wishItemRendererParams}
                renderer={WishListItem}
                pending={loading}
                errored={false}
                filtered={false}
            />
        </Container>
    );
}

export default WishList;
