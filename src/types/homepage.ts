import { Article, Volunteer } from "@/generated/graphql";

export type HomePageCompiledResults = {
    allArticle: Array<Article>;
    allVolunteer: Array<Volunteer>;
}