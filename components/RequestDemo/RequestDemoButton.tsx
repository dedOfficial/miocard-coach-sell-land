import { FC, memo } from "react";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RequestDemoButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      className="btn-gradient rounded-2xl py-4 px-8 font-medium text-white transition-all hover:opacity-70"
      onClick={onClick}
    >
      Request Demo
    </button>
  );
};

export default memo(RequestDemoButton);
