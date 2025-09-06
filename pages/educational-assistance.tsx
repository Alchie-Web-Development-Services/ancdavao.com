import ProgramDetail, { ProgramDetailProps } from "./programs-and-services/[slug]";
import { GetStaticProps } from "next";
import { client } from "@/lib/sanity";
import { AllProgramServicesQuery } from "@/generated/graphql";
import {
  PROGRAM_SERVICE_BY_SLUG_QUERY,
} from "@/graphql/allProgramServices";

export default ProgramDetail;

export const getStaticProps: GetStaticProps<ProgramDetailProps> = async () => {
  const slug = "educational-assistance";
  const result = await client.request<AllProgramServicesQuery>(
    PROGRAM_SERVICE_BY_SLUG_QUERY,
    { slug },
  );
  const program = result.allProgramService[0];

  if (!program) {
    return {
      notFound: true,
    };
  }

  return {
    props: { program },
  };
};