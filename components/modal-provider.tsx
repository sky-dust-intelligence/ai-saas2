"use client";

import { useEffect, useState } from react;
import ProModal from "./pro-modal";
import useProModal from './hooks/use-pro-modal';

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);
  const { isOpen, onOpen, onClose } = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {isOpen && <ProModal onClose={onClose} />}
    </>
  );
};

export { ProModal };