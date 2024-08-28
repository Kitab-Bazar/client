import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PreloadMessage from '#base/components/PreloadMessage';

import routes from '#base/configs/routes';

interface Props {
    className?: string;
}

function Routes(props: Props) {
    const { className } = props;

    return (
        <Suspense
            fallback={(
                <PreloadMessage
                    className={className}
                    content="Loading page..."
                />
            )}
        >
            <Switch>
                <Route
                    exact
                    path={routes.wishList.path}
                >
                    {routes.wishList.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.myProfile.path}
                >
                    {routes.myProfile.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.eBook.path}
                >
                    {routes.eBook.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.login.path}
                >
                    {routes.login.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.donations.path}
                >
                    {routes.donations.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.register.path}
                >
                    {routes.register.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.forgotPassword.path}
                >
                    {routes.forgotPassword.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.home.path}
                >
                    {routes.home.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.bookList.path}
                >
                    {routes.bookList.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.myProfile.path}
                >
                    {routes.myProfile.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.activateUser.path}
                >
                    {routes.activateUser.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.resetPassword.path}
                >
                    {routes.resetPassword.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.about.path}
                >
                    {routes.about.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.moderation.path}
                >
                    {routes.moderation.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.translationDashboard.path}
                >
                    {routes.translationDashboard.load({ className })}
                </Route>
                <Route
                    exact
                    path={routes.fourHundredFour.path}
                >
                    {routes.fourHundredFour.load({ className })}
                </Route>
            </Switch>
        </Suspense>
    );
}
export default Routes;
