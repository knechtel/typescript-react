import React, { FC } from 'react';

interface MessageProps {
    message: string;
}

const FunctionalComponent: FC<MessageProps> = ({ message }) => {
    return (
        <>
            <h1>Welcome {message}</h1>
        </>
    );
};

export default FunctionalComponent;