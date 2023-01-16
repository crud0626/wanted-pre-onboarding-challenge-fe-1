import React, { useState } from 'react';

interface IProps<S, F> {
    initialState: S;
    onSubmit: F;
}

const useForm = <S, F extends Function>({ initialState, onSubmit }: IProps<S, F>) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    }

    return {
        formData,
        handleChange,
        handleSubmit
    };
}

export { useForm };