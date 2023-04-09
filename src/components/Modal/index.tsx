import useIsClient from "@/hooks/useIsClient";
import { MODAL_ROOT_ID } from "@/pages/_app";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ visible, onClose, children }: Props) => {
  const { isClient } = useIsClient();

  if (!isClient) return <div />;
  const ModalRoot = document.getElementById(MODAL_ROOT_ID);
  if (!ModalRoot || !visible) return <div />;

  return createPortal(
    <div className="h-screen w-screen fixed bottom-0 left-0 flex flex-col bg-opacity-30 bg-grey-3 z-20">
      <div className="flex-1" onClick={onClose} />
      <div className="flex flex-col bg-grey-3 rounded-t-3xl min-h-[20vh] max-h-[90vh]">
        <div className="h-11 flex justify-end">
          <button
            className="h-11 w-11 flex items-center justify-center"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
        <div className="overflow-auto flex-1">{children}</div>
      </div>
    </div>,
    ModalRoot
  );
};

export default Modal;
