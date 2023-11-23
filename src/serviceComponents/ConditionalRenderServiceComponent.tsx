import React from 'react';
import { useAppSelector } from '../store/typedHooks';
import { RootState } from '../store';

type ChildrenPropsType = {
  children: JSX.Element[];
  getStateCallback: (state: RootState) => boolean;
};

const ConditionalRenderServiceComponent: React.FC<ChildrenPropsType> = (props) => {
  const flag = useAppSelector(props.getStateCallback);
  if (flag) {
    return props.children[0];
  }
  return props.children[1];
};

export default ConditionalRenderServiceComponent;
