import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
      <div>
        <RotatingLines
          strokeColor="#4f58fd"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
  );
};