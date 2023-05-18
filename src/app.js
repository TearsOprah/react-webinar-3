import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems)

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onOpenCart: useCallback(() => {
      setShowCart(true);
    }, [])

  }

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS'/>
      <Controls onOpenCart={callbacks.onOpenCart}/>
      <List list={list}
            cartItems={cartItems}
            setCartItems={setCartItems} />
      {showCart && (
        <Cart onClose={() => setShowCart(false)}
              cartItems={cartItems}
              setCartItems={setCartItems} />
      )}
    </PageLayout>
  );
}

export default App;
