import React, { useMemo } from 'react';

import {
    Modal,
    Button,
    TextInput,
    useAlert,
} from '@the-deep/deep-ui';
import { useMutation, gql } from '@apollo/client';
import {
    ObjectSchema,
    PartialForm,
    useForm,
    createSubmitHandler,
    getErrorObject,
    removeNull,
} from '@togglecorp/toggle-form';

import {
    UpdateIndividualProfileMutation,
    UpdateIndividualProfileMutationVariables,
} from '#generated/types';
import { transformToFormError, ObjectError } from '#base/utils/errorTransform';
import { individualProfile } from '#base/configs/lang';
import useTranslation from '#base/hooks/useTranslation';

import NonFieldError from '#components/NonFieldError';

import styles from './styles.css';

const UPDATE_INDIVIDUAL_PROFILE = gql`
    mutation UpdateIndividualProfile(
        $firstName: String,
        $lastName: String,
        $phoneNumber: String,
    ){
        updateProfile(data: {
            firstName: $firstName,
            lastName: $lastName,
            phoneNumber: $phoneNumber,
        }) {
            ok
            errors
        }
    }
`;

type FormType = NonNullable<UpdateIndividualProfileMutationVariables>;
type PartialFormType = PartialForm<FormType>;
type FormSchema = ObjectSchema<PartialFormType>;

type FormSchemaFields = ReturnType<FormSchema['fields']>;

const schema: FormSchema = {
    fields: (): FormSchemaFields => {
        const basicFields: FormSchemaFields = {
            firstName: [],
            lastName: [],
            phoneNumber: [],
        };
        return basicFields;
    },
};

interface Props {
    onModalClose: () => void;
    onEditSuccess: () => void;
    profileDetails: PartialFormType | undefined | null;
}

function EditProfileModal(props: Props) {
    const {
        onEditSuccess,
        onModalClose,
        profileDetails,
    } = props;

    const initialValue: PartialFormType = useMemo(() => ({
        firstName: profileDetails?.firstName,
        lastName: profileDetails?.lastName,
        phoneNumber: profileDetails?.phoneNumber,
    }), [
        profileDetails?.firstName,
        profileDetails?.lastName,
        profileDetails?.phoneNumber,
    ]);

    const {
        pristine,
        value,
        error: riskyError,
        setFieldValue,
        validate,
        setError,
    } = useForm(schema, initialValue);

    const error = getErrorObject(riskyError);
    const alert = useAlert();
    const strings = useTranslation(individualProfile);

    const [
        updateProfile,
        { loading: updateProfilePending },
    ] = useMutation<UpdateIndividualProfileMutation, UpdateIndividualProfileMutationVariables>(
        UPDATE_INDIVIDUAL_PROFILE,
        {
            onCompleted: (response) => {
                const { updateProfile: profileRes } = response;
                if (!profileRes) {
                    return;
                }
                const {
                    errors,
                    ok,
                } = profileRes;

                if (ok) {
                    alert.show(
                        strings.profileUpdateSuccessMessage,
                        { variant: 'success' },
                    );
                    onEditSuccess();
                    onModalClose();
                } else if (errors) {
                    const formError = transformToFormError(removeNull(errors) as ObjectError[]);
                    setError(formError);
                    alert.show(
                        strings.profileUpdateErrorMessage,
                        { variant: 'error' },
                    );
                }
            },
            onError: (errors) => {
                alert.show(
                    errors.message,
                    { variant: 'error' },
                );
            },
        },
    );

    const submit = useMemo(() => (
        createSubmitHandler(
            validate,
            setError,
            (finalValue) => {
                updateProfile({
                    variables: {
                        firstName: finalValue?.firstName,
                        lastName: finalValue?.lastName,
                        phoneNumber: finalValue?.phoneNumber,
                    },
                });
            },
        )
    ), [setError, validate, updateProfile]);

    return (
        <Modal
            heading={strings.modalHeading}
            onCloseButtonClick={onModalClose}
            size="small"
            freeHeight
            bodyClassName={styles.editModalContent}
            footerActions={(
                <>
                    <Button
                        name={undefined}
                        onClick={onModalClose}
                        variant="secondary"
                    >
                        {strings.editProfileCancelButtonLabel}
                    </Button>
                    <Button
                        name={undefined}
                        variant="primary"
                        onClick={submit}
                        disabled={pristine || updateProfilePending}
                    >
                        {strings.editProfileSaveButtonLabel}
                    </Button>
                </>
            )}
        >
            <NonFieldError error={error} />
            <TextInput
                name="firstName"
                onChange={setFieldValue}
                label={strings.editProfileFirstNameInputLabel}
                value={value?.firstName}
                error={error?.firstName}
                disabled={updateProfilePending}
            />
            <TextInput
                name="lastName"
                onChange={setFieldValue}
                label={strings.editProfileLastNameInputLabel}
                value={value?.lastName}
                error={error?.lastName}
                disabled={updateProfilePending}
            />
            <TextInput
                name="phoneNumber"
                label={strings.editProfilePhoneNumberInputLabel}
                onChange={setFieldValue}
                value={value?.phoneNumber}
                error={error?.phoneNumber}
                disabled={updateProfilePending}
            />
        </Modal>
    );
}

export default EditProfileModal;
