import { Article } from "@/generated/graphql";

export type HomePageQuery = {
    allArticle: Array<Article>;
}