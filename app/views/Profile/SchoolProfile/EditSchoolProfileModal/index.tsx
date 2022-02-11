import React, { useMemo, useState } from 'react';

import {
    Modal,
    Button,
    TextInput,
    NumberInput,
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
    UpdateSchoolProfileDetailsMutation,
    UpdateSchoolProfileDetailsMutationVariables,
} from '#generated/types';
import { transformToFormError, ObjectError } from '#base/utils/errorTransform';
import MunicipalitySelectInput, { SearchMunicipalityType } from '#components/MunicipalitySelectInput';
import { school } from '#base/configs/lang';
import useTranslation from '#base/hooks/useTranslation';

const UPDATE_SCHOOL_PROFILE_DETAILS = gql`
    mutation UpdateSchoolProfileDetails(
        $name: String!,
        $municipality: String!,
        $wardNumber: Int!,
        $localAddress: String,
    ){
        updateProfile(
            data: {
                school: {
                    name: $name,
                    municipality: $municipality,
                    wardNumber: $wardNumber,
                    localAddress: $localAddress,
                },
            }) {
            ok
            errors
        }
    }
`;

type FormType = Partial<UpdateSchoolProfileDetailsMutationVariables>;
type PartialFormType = PartialForm<FormType>;
type FormSchema = ObjectSchema<PartialFormType>;
type FormSchemaFields = ReturnType<FormSchema['fields']>;

const schema: FormSchema = {
    fields: (): FormSchemaFields => {
        const basicFields: FormSchemaFields = {
            name: [],
            municipality: [],
            wardNumber: [],
            localAddress: [],
        };
        return basicFields;
    },
};

interface Props {
    onModalClose: () => void;
    onEditSuccess: () => void;
    profileDetails: PartialFormType,
}

function EditSchoolProfileModal(props: Props) {
    const {
        onEditSuccess,
        onModalClose,
        profileDetails,
    } = props;

    const strings = useTranslation(school);

    const initialValue = useMemo((): FormType => ({
        municipality: profileDetails.municipality,
        wardNumber: profileDetails.wardNumber,
        localAddress: profileDetails.localAddress ?? undefined,
        name: profileDetails.name,
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
        municipalityOptions,
        setMunicipalityOptions,
    ] = useState<SearchMunicipalityType[] | null | undefined>(
        /*
        () => (
            profileDetails?.municipality ? [profileDetails.municipality] : undefined
        ),
        */
    );

    const [
        updateSchoolProfile,
        { loading: updateProfilePending },
    ] = useMutation<
        UpdateSchoolProfileDetailsMutation,
        UpdateSchoolProfileDetailsMutationVariables
    >(
        UPDATE_SCHOOL_PROFILE_DETAILS,
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
                if (finalValue.municipality && finalValue.wardNumber && finalValue.name) {
                    updateSchoolProfile({
                        variables: {
                            municipality: finalValue.municipality,
                            wardNumber: finalValue.wardNumber,
                            localAddress: finalValue.localAddress,
                            name: finalValue.name,
                        },
                    });
                }
            },
        )
    ), [setError, validate, updateSchoolProfile]);

    return (
        <Modal
            heading={strings.editSchoolProfileModalHeading}
            onCloseButtonClick={onModalClose}
            size="small"
            freeHeight
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
                name="name"
                onChange={setFieldValue}
                label={strings.schoolNameLabel}
                value={value?.name}
                error={error?.name}
                disabled={updateProfilePending}
            />
            <TextInput
                name="localAddress"
                label={strings.localAddressLabel}
                onChange={setFieldValue}
                value={value?.localAddress}
                error={error?.localAddress}
                disabled={updateProfilePending}
            />
            <MunicipalitySelectInput
                name="municipality"
                label={strings.municipalityLabel}
                onChange={setFieldValue}
                value={value?.municipality}
                error={error?.municipality}
                options={municipalityOptions}
                onOptionsChange={setMunicipalityOptions}
            />
            <NumberInput
                name="wardNumber"
                label={strings.wardNumberLabel}
                onChange={setFieldValue}
                value={value?.wardNumber}
                error={error?.wardNumber}
                disabled={updateProfilePending}
                min={1}
                max={99}
            />
        </Modal>
    );
}

export default EditSchoolProfileModal;
