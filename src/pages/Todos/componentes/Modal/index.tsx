import { ReactNode } from "react";
import { ModalContainer, ModalContent } from "./styles";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}
export function Modal({onClose, children} : ModalProps) {
  return (
    <ModalContainer  onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}

