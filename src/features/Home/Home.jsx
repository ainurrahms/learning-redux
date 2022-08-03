import React from 'react';
import Button from '@/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import homeAction from '@/api/actions/home.action';

function Home() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.home);

  const increment = () => {
    dispatch(homeAction.increaseCounter());
  };

  const decrement = () => {
    dispatch(homeAction.decrementCounter());
  };

  console.log(store, 'store');

  return (
    <div>
      <div>Count: {store?.count}</div>
      <Button onClick={() => increment()} text={'Increment Button'} />
      <Button onClick={() => decrement()} text={'Decrement Button'} />
    </div>
  );
}

export default Home;
