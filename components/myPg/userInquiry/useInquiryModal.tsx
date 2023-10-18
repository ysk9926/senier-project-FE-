import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

interface IUseInquiryModal {
  title: string;
  content: string;
  state: boolean;
  inquiryId: number;
}

export default function UseInquiryModal({
  title,
  content,
  state,
  inquiryId,
}: IUseInquiryModal) {
  // next ui
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        className=" bg-inherit rounded-none border-b-1"
      >
        {title}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <span>No.{inquiryId}</span>
              </ModalHeader>
              <ModalBody className="-mt-3">
                {/* seperate */}
                <div className=" w-full px-3 h-[1px] bg-gray-300"></div>
                <div>
                  <div className=" flex justify-start items-center">
                    <span className=" font-semibold mr-2">문의 내용</span>
                    {state ? (
                      <div className=" rounded-full bg-[#f5a524] w-3 h-3"></div>
                    ) : (
                      <div className=" rounded-full bg-[#17c964] w-3 h-3"></div>
                    )}
                  </div>
                  {/* seperate */}
                  <div className=" w-full px-3 mt-3 h-[1px] bg-gray-300"></div>
                  <div className="text-sm mt-3 h-80 overflow-auto scrollbar-none">
                    {content}
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
