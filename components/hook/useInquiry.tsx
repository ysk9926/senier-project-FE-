"use client";

import {
  AllInquiryQuery,
  IAllInquiryData,
} from "@/documents/query/allInquiry.query";
import { user } from "@nextui-org/react";
import useUser from "./useMe";
import {
  ISeeUnAnswerInquiryData,
  SeeUnAnswerInquiryQuery,
} from "@/documents/query/seeUnAnswerInquiry.query";
import { useQuery } from "@apollo/client/react";
import {
  ISeeAnswerInquiryData,
  SeeAnswerInquiryQuery,
} from "@/documents/query/seeAnserInquiry.query";
import {
  ISeeMyInquiryData,
  SeeMyInquiryQuery,
} from "@/documents/query/seeMyInquiry.query";

// 전체 문의 데이터
export function useAllInquiry(): IAllInquiryData {
  const user = useUser();
  const { data: allInquiry } = useQuery(AllInquiryQuery, {
    skip: !user?.me.admin,
  });

  return allInquiry;
}

// 열린 문의
export function useSeeUnAnswerInquiry(): ISeeUnAnswerInquiryData {
  const user = useUser();
  const { data: SeeUnAnswerInquiryData } = useQuery(SeeUnAnswerInquiryQuery, {
    skip: !user?.me.admin,
  });

  return SeeUnAnswerInquiryData;
}

// 닫힌 문의
export function useSeeAnswerInquiry(): ISeeAnswerInquiryData {
  const user = useUser();
  const { data: SeeAnswerInquiryData } = useQuery(SeeAnswerInquiryQuery, {
    skip: !user?.me.admin,
  });

  return SeeAnswerInquiryData;
}

// 내 문의
export function useSeeMyInquiry(): ISeeMyInquiryData {
  const { data: SeeMyInquiryData } = useQuery(SeeMyInquiryQuery, {
    skip: !user,
  });

  return SeeMyInquiryData;
}
