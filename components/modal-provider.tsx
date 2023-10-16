"use client";

import { Dialog, DialogTrigger, DialogContent } from "./pro-modal";
import ProModal from 
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
