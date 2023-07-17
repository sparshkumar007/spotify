import React from 'react';

const IdContext=React.createContext({
    id: '',
})

export const IdProvider=IdContext.Provider;
export default IdContext;