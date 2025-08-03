import { Article, Volunteer, Cause } from "@/generated/graphql";

export type HomePageCompiledResults = {
    allArticle: Array<Article>;
    allVolunteer: Array<Volunteer>;
    allCause: Array<Cause>;
    allEvent: Array<Event>;
}