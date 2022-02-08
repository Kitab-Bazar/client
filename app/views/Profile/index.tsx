import React from 'react';

import { useQuery, gql } from '@apollo/client';

import {
    MyProfileTypeQuery,
    MyProfileTypeQueryVariables,
} from '#generated/types';

import IndividualProfile from './IndividualProfile';
import SchoolProfile from './SchoolProfile';
import InstitutionProfile from './InstitutionProfile';
import PublisherProfile from './PublisherProfile';

import styles from './styles.css';

// FIXME: do not use this small request
const MY_PROFILE = gql`
    query MyProfileType {
        me {
            id
            userType
        }
    }
`;

function Profile() {
    const {
        data: profileData,
    } = useQuery<MyProfileTypeQuery, MyProfileTypeQueryVariables>(
        MY_PROFILE,
    );

    const userType = profileData?.me?.userType;

    // FIXME: handle error handling and loading states

    return (
        <div className={styles.profile}>
            {userType === 'INDIVIDUAL_USER' && (
                <IndividualProfile />
            )}
            {userType === 'SCHOOL_ADMIN' && (
                <SchoolProfile />
            )}
            {userType === 'PUBLISHER' && (
                <PublisherProfile />
            )}
            {userType === 'INSTITUTIONAL_USER' && (
                <InstitutionProfile />
            )}
        </div>
    );
}

export default Profile;
