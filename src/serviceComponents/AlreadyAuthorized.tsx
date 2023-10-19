import React from 'react';
// import ChildrenPropsType from '../types/serviceTypes';
import { useAppSelector } from '../store/typedHooks';

type ChildrenPropsType = {
  children: JSX.Element[];
};

const AlreadyAuthorized: React.FC<ChildrenPropsType> = (props) => {
  const email = useAppSelector((state) => state.user.user.email);

  if (email === 'email') {
    return props.children[0];
  }
  return props.children[1];
};

export default AlreadyAuthorized;
