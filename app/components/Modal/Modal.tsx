import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactModal from "react-modal";

interface Props {
  isOpen: boolean;
}
const styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Modal: FC<PropsWithChildren<Props>> = ({ isOpen, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  ReactModal.setAppElement("#root");
  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => setModalIsOpen(false);

  return (
    <ReactModal isOpen={isOpen} style={styles}>
      {children}
    </ReactModal>
  );
};

export default Modal;
