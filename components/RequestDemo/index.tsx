import { useCallback, useState, memo } from "react";
import RequestDemoButton from "./RequestDemoButton";
import RequestDialog from "./RequestDialog";

const RequestDemo = () => {
  const [isDialogOpen, setDialog] = useState(false);

  const onRequestDemoClick = useCallback(() => {
    setDialog(true);
  }, []);

  const onRequestDialogClose = useCallback(() => {
    setDialog(false);
  }, []);
  return (
    <>
      <RequestDialog open={isDialogOpen} onClose={onRequestDialogClose} />
      <RequestDemoButton onClick={onRequestDemoClick} />
    </>
  );
};

export default memo(RequestDemo);
