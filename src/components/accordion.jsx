import React, {createContext, cloneElement, Children, useState} from 'react';

const Context = createContext({});

//const {Provider, Consumer} = context;

export const Item = ({id, children}) => (
    <div>
        {Children.map(children, (child) => (
            cloneElement(child, {
                id
            })
        ))}
    </div>
);

export const Title = ({ id, children }) => (
    <Context.Consumer>
      {({ changeItem }) => <h2 onClick={() => changeItem(id)}>{children}</h2>}
    </Context.Consumer>
  );

export const Body = ({id, children}) => (
    <Context.Consumer>
        {({ activeItemId }) => activeItemId === id ? <div>{children}</div> : null}
    </Context.Consumer>
)

export const Accordion = ({children, defaultId}) => {
    const [activeItemId, changeItem] = useState(defaultId);
    
    return(
        <Context.Provider
            value={{
                activeItemId,
                changeItem,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Accordion;
