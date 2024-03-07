import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );

    const onNameChange = ( {target} ) => {
        const {name, value} = target;
        console.log(target);
        setFormState({
            ...formState,
            [name]: value
        });
    };
    const onLastNameChange = ( {target} ) => {
        const {name, value} = target;
        console.log(target);
        setFormState({
            ...formState,
            [name]: value
        });
    };
    const onRolChange = ( {target} ) => {
        const {rol, value} = target;
        console.log(target.value);
        setFormState({
            ...formState,
            rol: value
        });
    };
    const onCountryChange = ( {target} ) => {
        const {country, value} = target;
        console.log(target.value);
        setFormState({
            ...formState,
            country: value
        });
    };
    const onEmailChange = ( {target} ) => {
        const {email, value} = target;
        console.log(target.value);;
        setFormState({
            ...formState,
            email: value
        });
    };
    const onPasswordChange = ( {target} ) => {
        const {password, value} = target;
        console.log(target.value);
        setFormState({
            ...formState,
            password: value
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onNameChange,
        onLastNameChange,
        onRolChange,
        onCountryChange,
        onEmailChange,
        onPasswordChange,
        onResetForm,
    }
}