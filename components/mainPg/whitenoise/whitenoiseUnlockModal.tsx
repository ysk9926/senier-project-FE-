import useUser from "@/components/hook/useMe";
import { EditLockMutation } from "@/documents/mutations/Whitenoise/UnLockWhitenoise.mutation";
import { SeeMyWhitenosieQuery } from "@/documents/queries/seeMyWhitenoise.query";
import ILocked from "@/icon/ILocked";
import IUnLock from "@/icon/IUnLock";
import { useMutation } from "@apollo/client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface IUnlockModal {
  whitenoiseName: string;
  whitenoiseId: number;
  requirePoints: number;
}

export default function UserWhitenoiseUnLockModal({
  whitenoiseName,
  whitenoiseId,
  requirePoints,
}: IUnlockModal) {
  // 유저정보 호출
  const user = useUser();
  const [remainPoint, setRemainPoint] = useState(0);
  useEffect(() => {
    if (user) {
      const remain = user.me.points - requirePoints;
      setRemainPoint(remain);
    }
  }, [user]);
  // next ui
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // 호버 핸들러
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleUnhover = () => {
    setIsHovered(false);
  };

  // 언락 뮤테이션
  const [unlockWhitenoiseMutation, { loading: unlockWhitenoiseLoading }] =
    useMutation(EditLockMutation, {
      refetchQueries: [{ query: SeeMyWhitenosieQuery }],
    });
  const unlockHandler = async ({ onClose }: { onClose: () => void }) => {
    if (unlockWhitenoiseLoading) {
      return;
    }
    try {
      const result = await unlockWhitenoiseMutation({
        variables: {
          whiteNoiseId: whitenoiseId,
        },
      });
      console.log("잠금해제 결과", result);
      onClose();
    } catch (error) {
      console.log("잠금해제 에러", error);
    }
  };

  return (
    <>
      <Button
        className=" absolute w-full h-full z-10 bg-opacity-40 rounded-md bg-black"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onPress={onOpen}
      >
        {isHovered ? (
          /* 호버 상태일 때 보여질 내용 */
          <div className="w-7 fill-white opacity-100">
            <IUnLock />
          </div>
        ) : (
          /* 일반 상태일 때 보여질 내용 */
          <div className="w-7 fill-white opacity-100">
            <ILocked />
          </div>
        )}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                {whitenoiseName}
              </ModalHeader>
              <ModalBody>
                {/* 보유 및 필요 포인트 wrapper */}
                <div className=" flex justify-center items-center space-x-3">
                  {/* 현재 보유 포인트 */}
                  <div className=" flex justify-center items-center space-x-5">
                    <span className=" text-sm">보유 포인트 :</span>
                    <span className=" text-red-600 font-semibold">
                      {user.me.points}
                    </span>
                  </div>
                  {/* 잠금헤제 필요 포인트 */}
                  <div className=" flex justify-center items-center space-x-5">
                    <span className=" text-sm">필요 포인트 :</span>
                    <span className=" text-red-600 font-semibold">
                      {requirePoints}
                    </span>
                  </div>
                </div>
                {/* 결제 후 잔액 */}
                <div className=" flex justify-center items-center space-x-5 mt-3">
                  <span>결제 후 잔여 포인트 :</span>
                  <span className=" text-red-600 font-semibold">
                    {remainPoint}
                  </span>
                </div>
              </ModalBody>
              {/* 버튼 wrapper */}
              <ModalFooter className="flex justify-center space-x-5">
                <Button size="sm" onPress={onClose}>
                  취소
                </Button>
                <Button size="sm" onPress={() => unlockHandler({ onClose })}>
                  잠금해제
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
