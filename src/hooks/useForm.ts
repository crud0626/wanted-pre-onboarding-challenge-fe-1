import React, { useState } from 'react';

interface IProps<S> {
    initialState: S;
}

const useForm = <S>({ initialState }: IProps<S>) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return {
        formData,
        handleChange
    };
}

export { useForm };