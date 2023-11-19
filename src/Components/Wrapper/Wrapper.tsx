import { ChildrenProps } from '../../models/types/types';
import './Wrapper.css';

const Wrapper = ({ children }: ChildrenProps) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
