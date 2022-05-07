import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

export const Sceleton = () => {
  return (
    <>
      <Skeleton
        count={1}
        width={400}
        style={{
          display: 'flex',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      />
      ;
    </>
  );
};
