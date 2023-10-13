"use client";

import {
  AllInquiryQuery,
  IAllInquiryData,
} from "@/documents/queries/allInquiry.queries";
import useUser from "./useMe";
import { useQuery } from "@apollo/client";
import {
  ISeeUnAnswerInquiryData,
  SeeUnAnswerInquiryQuery,
} from "@/documents/queries/seeUnAnswerInquiry.mutation";
import {
  ISeeAnswerInquiryData,
  SeeAnswerInquiryQuery,
} from "@/documents/queries/seeAnswerInquiry.query";
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

// 열린 문의
export function useSeeUnAnswerInquiry(): ISeeUnAnswerInquiryData {
  const user = useUser();
  const { data: SeeUnAnswerInquiryData, refetch: refetchSeeUnAnswerInquiry } =
    useQuery(SeeUnAnswerInquiryQuery, {
      skip: !user?.me.admin,
    });

  useEffect(() => {
    if (user?.me.admin) {
      refetchSeeUnAnswerInquiry();
    }
  }, [user]);

  return SeeUnAnswerInquiryData;
}

// 닫힌 문의
export function useSeeAnswerInquiry(): ISeeAnswerInquiryData {
  const user = useUser();
  const { data: SeeAnswerInquiryData, refetch: refetchSeeAnswerInquiryData } =
    useQuery(SeeAnswerInquiryQuery, {
      skip: !user?.me.admin,
    });

  useEffect(() => {
    if (user?.me.admin) {
      refetchSeeAnswerInquiryData();
    }
  }, [user]);

  return SeeAnswerInquiryData;
}
