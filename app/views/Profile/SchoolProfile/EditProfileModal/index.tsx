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
    requiredCondition,
    requiredStringCondition,
} from '@togglecorp/toggle-form';

import {
    UpdateSchoolProfileMutation,
    UpdateSchoolProfileMutationVariables,
    SchoolType,
} from '#generated/types';
import { transformToFormError, ObjectError } from '#base/utils/errorTransform';
import { school } from '#base/configs/lang';
import useTranslation from '#base/hooks/useTranslation';

import styles from './styles.css';

const UPDATE_SCHOOL_PROFILE = gql`
    mutation UpdateSchoolProfile(
        $firstName: String,
        $lastName: String,
        $phoneNumber: String,
        $municipality: String!,
        $name: String!,
        $wardNumber: Int!,
    ){
        updateProfile(data: {
            firstName: $firstName,
            lastName: $lastName,
            phoneNumber: $phoneNumber,
            school: {
                name: $name,
                wardNumber: $wardNumber,
                municipality: $municipality,
            },
        }) {
            ok
            errors
        }
    }
`;

interface UpdateSchoolProfileFields {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    name: string;
    municipality: string;
    wardNumber: number;
}

type FormType = Partial<UpdateSchoolProfileFields>;

type FormSchema = ObjectSchema<PartialForm<FormType>>;

type FormSchemaFields = ReturnType<FormSchema['fields']>;

const schema: FormSchema = {
    fields: (): FormSchemaFields => {
        const basicFields: FormSchemaFields = {
            firstName: [],
            lastName: [],
            phoneNumber: [],
            name: [requiredStringCondition],
            municipality: [requiredStringCondition],
            wardNumber: [requiredCondition],
        };
        return basicFields;
    },
};

interface Props {
    onModalClose: () => void;
    onEditSuccess: () => void;
    profileDetails: {
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        school: SchoolType;
    };
}

function EditProfileModal(props: Props) {
    const {
        onEditSuccess,
        onModalClose,
        profileDetails,
    } = props;

    const strings = useTranslation(school);

    const initialValue = useMemo((): FormType => ({
        firstName: profileDetails.firstName,
        lastName: profileDetails.lastName,
        phoneNumber: profileDetails.phoneNumber ?? undefined,
        name: profileDetails.school?.name,
        municipality: profileDetails.school?.municipality,
        wardNumber: profileDetails.school?.wardNumber,
    }), [profileDetails]);

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

    const [
        updateProfile,
        { loading: updateProfilePending },
    ] = useMutation<UpdateSchoolProfileMutation, UpdateSchoolProfileMutationVariables>(
        UPDATE_SCHOOL_PROFILE,
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

                if (errors) {
                    const formError = transformToFormError(removeNull(errors) as ObjectError[]);
                    setError(formError);
                    alert.show(
                        strings.profileUpdateErrorLabel,
                        {
                            variant: 'error',
                        },
                    );
                } else if (ok) {
                    alert.show(
                        strings.profileUpdateSuccessLabel,
                        {
                            variant: 'success',
                        },
                    );
                    onEditSuccess();
                    onModalClose();
                }
            },
            onError: () => {
                alert.show(
                    strings.profileUpdateErrorLabel,
                    {
                        variant: 'error',
                    },
                );
            },
        },
    );

    const submit = useMemo(() => (
        createSubmitHandler(
            validate,
            setError,
            (finalValue) => {
                // FIXME: cast finalValue
                updateProfile({
                    variables: {
                        firstName: finalValue.firstName,
                        lastName: finalValue.lastName,
                        phoneNumber: finalValue.phoneNumber,
                        municipality: finalValue.municipality,
                        name: finalValue.name,
                        wardNumber: finalValue.wardNumber,
                    },
                });
            },
        )
    ), [setError, validate, updateProfile]);

    return (
        <Modal
            heading="Edit Profile"
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
                        {strings.cancelLabel}
                    </Button>
                    <Button
                        name={undefined}
                        variant="primary"
                        onClick={submit}
                        disabled={pristine || updateProfilePending}
                    >
                        {strings.saveLabel}
                    </Button>
                </>
            )}
        >
            <TextInput
                name="firstName"
                onChange={setFieldValue}
                label={strings.firstNameLabel}
                value={value?.firstName}
                error={error?.firstName}
                disabled={updateProfilePending}
            />
            <TextInput
                name="lastName"
                onChange={setFieldValue}
                label={strings.lastNameLabel}
                value={value?.lastName}
                error={error?.lastName}
                disabled={updateProfilePending}
            />
            <TextInput
                name="phoneNumber"
                label={strings.phoneNumberLabel}
                onChange={setFieldValue}
                value={value?.phoneNumber}
                error={error?.phoneNumber}
                disabled={updateProfilePending}
            />
        </Modal>
    );
}

export default EditProfileModal;
