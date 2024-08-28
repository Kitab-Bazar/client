import { lazy } from 'react';

import { wrap } from '#base/utils/routes';

const title = 'Kitab Bazar';

const fourHundredFour = wrap({
    path: '*',
    title: `${title} - 404`,
    component: lazy(() => import('#base/components/PreloadMessage')),
    componentProps: {
        heading: '404',
        content: 'What you are looking for does not exist.',
    },
    visibility: 'is-anything',
    navbarVisibility: true,
});
const register = wrap({
    path: '/register/',
    title: `${title} - Register`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Register')),
    componentProps: {
    },
    visibility: 'is-not-authenticated',
});
const login = wrap({
    path: '/login/',
    title: `${title} - Login`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Login')),
    componentProps: {
    },
    visibility: 'is-not-authenticated',
});
const donations = wrap({
    path: '/donations/',
    title: `${title} - Donations`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Donations')),
    componentProps: {
    },
    visibility: 'is-anything',
});
const forgotPassword = wrap({
    path: '/forgot-password/',
    title: `${title} - Forgot Password`,
    navbarVisibility: true,
    component: lazy(() => import('#views/ForgotPassword')),
    componentProps: {
    },
    visibility: 'is-not-authenticated',
});
const activateUser = wrap({
    path: '/activate/:userId/:token/',
    title: `${title} - Activate User`,
    navbarVisibility: true,
    component: lazy(() => import('#views/ActivateUser')),
    componentProps: {
    },
    visibility: 'is-anything',
});
const resetPassword = wrap({
    path: '/reset-password/:userId/:token/',
    title: `${title} - Reset Password`,
    navbarVisibility: true,
    component: lazy(() => import('#views/ResetPassword')),
    componentProps: {
    },
    visibility: 'is-anything',
});

const home = wrap({
    path: '/',
    title: `${title} - Home`,
    navbarVisibility: true,
    component: lazy(() => import('#views/HomePage')),
    componentProps: {
    },
    visibility: 'is-anything',
});
const bookList = wrap({
    path: '/books/',
    title: `${title} - Books`,
    navbarVisibility: true,
    component: lazy(() => import('#views/BookList')),
    componentProps: {},
    visibility: 'is-anything',
});
const about = wrap({
    path: '/about/',
    title: `${title} - About`,
    navbarVisibility: true,
    component: lazy(() => import('#views/About')),
    componentProps: {
    },
    visibility: 'is-anything',
});

const myProfile = wrap({
    path: '/profile/',
    title: `${title} - Profile`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Profile')),
    componentProps: {
    },
    visibility: 'is-authenticated',
});
const wishList = wrap({
    path: '/wish-list/',
    title: `${title}  - Wish List`,
    navbarVisibility: true,
    component: lazy(() => import('#views/BookList')),
    componentProps: {
        wishList: true,
    },
    visibility: 'is-authenticated',
    checkPermissions: (user) => user?.type !== 'MODERATOR' && user?.type !== 'PUBLISHER',
});
const moderation = wrap({
    path: '/moderation/',
    title: `${title} - Moderation`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Moderation')),
    componentProps: {
    },
    visibility: 'is-authenticated',
    checkPermissions: (user) => user?.type === 'MODERATOR',
});
const translationDashboard = wrap({
    path: '/translation-dashboard/',
    title: `${title} - Translation Dashboard`,
    navbarVisibility: true,
    component: lazy(() => import('#views/TranslationDashboard')),
    componentProps: {
    },
    visibility: 'is-anything',
    // checkPermissions: (user) => user?.type === 'MODERATOR',
});
const eBook = wrap({
    path: '/ebook/',
    title: `${title} - eBook`,
    navbarVisibility: true,
    component: lazy(() => import('#views/Ebook')),
    componentProps: {
    },
    visibility: 'is-authenticated',
});
const routes = {
    register,
    login,
    donations,
    home,
    myProfile,
    wishList,
    fourHundredFour,
    activateUser,
    resetPassword,
    bookList,
    about,
    forgotPassword,
    moderation,
    translationDashboard,
    eBook,
};
export default routes;
