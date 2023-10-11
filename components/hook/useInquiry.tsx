"use client";

import {
  AllInquiryQuery,
  IAllInquiryData,
} from "@/documents/queries/allInquiry.queries";
import useUser from "./useMe";
import { useMutation, useQuery } from "@apollo/client";
import {
  ISeeUnAnswerInquiryData,
  SeeUnAnswerInquiryMutation,
} from "@/documents/mutations/seeUnAnswerInquiry.mutation";
import {
  ISeeAnswerInquiryData,
  SeeAnswerInquiryMutation,
} from "@/documents/mutations/seeAnswerInquiry.mutation";
import { useEffect } from "react";

// 전체 문의 데이터
export function useAllInquiry(): IAllInquiryData {
  const user = useUser();
  const { data: allInquiryData, refetch: refetchAllInquiry } = useQuery(
    AllInquiryQuery,
    {
      skip: !user?.me.admin,
    }
  );

  useEffect(() => {
    if (user?.me.admin) {
      refetchAllInquiry();
    }
  }, [user]);

  return allInquiryData;
}

// 열린 문의 데이터
export function useSeeUnAnswerInquiry(): ISeeUnAnswerInquiryData | undefined {
  const user = useUser();
  const [seeUnAnswerInquiry, { data: seeUnAnswerInquiryData }] = useMutation(
    SeeUnAnswerInquiryMutation
  );

  useEffect(() => {
    if (user?.me.admin) {
      seeUnAnswerInquiry();
    }
  }, [user]);

  return seeUnAnswerInquiryData;
}

// 닫힌 문의 데이터
export function useSeeAnswerInquiry(): ISeeAnswerInquiryData | undefined {
  const user = useUser();
  const [seeAnswerInquiry, { data: seeAnswerInInquiryData }] = useMutation(
    SeeAnswerInquiryMutation
  );

  useEffect(() => {
    if (user?.me.admin) {
      seeAnswerInquiry();
    }
  }, [user]);

  return seeAnswerInInquiryData;
}
