import React, { createContext, useContext, useState } from 'react';

export const StateContext = createContext(null);

/*
  The 'react-hooks/rules-of-hooks' linting rules prevent React Hooks fron being called
  inside of if() statements. This is because hooks must always be called in the same order
  every time a component is rendered. The 'react-hooks/rules-of-hooks' rule is disabled below
  because the "if (process.env.REACT_APP_SET_AUTH === 'firebase')" statements are evaluated
  at build time (not runtime). If the statement evaluates to false, then the code is not
  included in the bundle that is produced (due to tree-shaking). Thus, in this instance, it
  is ok to call hooks inside if() statements.
*/

export default function AppStateProvider(props) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');
  const [event, setEvent] = useState({});
  const contextValue = {
    error,
    setError,
    user,
    setUser,
    event,
    setEvent,
  };
  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppStateProvider');
  }
  return context;
}
