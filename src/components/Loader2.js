import { BallTriangle } from 'react-loader-spinner';

const Loader = () => (
  <div
    style={{ display: 'inline-flex', marginRight: 'auto', marginLeft: 'auto' }}
  >
    <BallTriangle color="#00BFFF" height={80} width={80} ariaLabel="loading" />
  </div>
);

export default Loader;
