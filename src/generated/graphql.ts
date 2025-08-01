import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Article = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  abstract?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Author>;
  bodyRaw?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mainImage?: Maybe<Image>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  abstract?: InputMaybe<StringFilter>;
  author?: InputMaybe<AuthorFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  publishedAt?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ArticleSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  abstract?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  publishedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Author = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  socialMedia?: Maybe<SocialMedia>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  socialMedia?: InputMaybe<SocialMediaFilter>;
};

export type AuthorSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  birthdate?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  socialMedia?: InputMaybe<SocialMediaSorting>;
};

export type Beneficiary = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Parent>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  programs?: Maybe<Array<Maybe<ProgramService>>>;
  pseudoName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  weightUponAdmission?: Maybe<Scalars['Float']['output']>;
};

export type BeneficiaryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateFilter>;
  dateAdded?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  parent?: InputMaybe<ParentFilter>;
  phone?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  pseudoName?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  weightUponAdmission?: InputMaybe<FloatFilter>;
};

export type BeneficiarySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  birthdate?: InputMaybe<SortOrder>;
  dateAdded?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  nickname?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  pseudoName?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  weightUponAdmission?: InputMaybe<SortOrder>;
};

export type Block = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Span>>>;
  level?: Maybe<Scalars['Float']['output']>;
  listItem?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cause = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  goalAmount?: Maybe<Scalars['Float']['output']>;
  mainImage?: Maybe<Image>;
  slug?: Maybe<Slug>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CauseFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  endDate?: InputMaybe<DatetimeFilter>;
  goalAmount?: InputMaybe<FloatFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CauseSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  goalAmount?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  slug?: InputMaybe<SlugSorting>;
  startDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Center = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  teamMembers?: Maybe<Array<Maybe<TeamMember>>>;
  volunteers?: Maybe<Array<Maybe<Volunteer>>>;
};

export type CenterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
};

export type CenterSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
};

export type CrossDatasetReference = {
  _dataset?: Maybe<Scalars['String']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  _projectId?: Maybe<Scalars['String']['output']>;
  _ref?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  _weak?: Maybe<Scalars['Boolean']['output']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type Event = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<Image>;
  slug?: Maybe<Slug>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EventFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  endDate?: InputMaybe<DatetimeFilter>;
  location?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type EventSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  slug?: InputMaybe<SlugSorting>;
  startDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type File = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityFileAsset>;
  media?: Maybe<GlobalDocumentReference>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
  media?: InputMaybe<GlobalDocumentReferenceFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  media?: InputMaybe<GlobalDocumentReferenceSorting>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type Geopoint = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type GlobalDocumentReference = {
  _key?: Maybe<Scalars['String']['output']>;
  _ref?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  _weak?: Maybe<Scalars['Boolean']['output']>;
};

export type GlobalDocumentReferenceFilter = {
  _key?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type GlobalDocumentReferenceSorting = {
  _key?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
  media?: Maybe<GlobalDocumentReference>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
  media?: InputMaybe<GlobalDocumentReferenceFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
  media?: InputMaybe<GlobalDocumentReferenceSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type MomentsOfHope = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  image?: Maybe<Image>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MomentsOfHopeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  date?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  link?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type MomentsOfHopeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  link?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Parent = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  children?: Maybe<Array<Maybe<Beneficiary>>>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  socialMedia?: Maybe<SocialMedia>;
};

export type ParentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  occupation?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  socialMedia?: InputMaybe<SocialMediaFilter>;
};

export type ParentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  birthdate?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  occupation?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  socialMedia?: InputMaybe<SocialMediaSorting>;
};

export type Partner = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  contactPhone?: Maybe<Scalars['String']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  logo?: Maybe<Image>;
  name?: Maybe<Scalars['String']['output']>;
  socialMedia?: Maybe<SocialMedia>;
  website?: Maybe<Scalars['String']['output']>;
};

export type PartnerFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  contactEmail?: InputMaybe<StringFilter>;
  contactPerson?: InputMaybe<StringFilter>;
  contactPhone?: InputMaybe<StringFilter>;
  logo?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  socialMedia?: InputMaybe<SocialMediaFilter>;
  website?: InputMaybe<StringFilter>;
};

export type PartnerSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  contactEmail?: InputMaybe<SortOrder>;
  contactPerson?: InputMaybe<SortOrder>;
  contactPhone?: InputMaybe<SortOrder>;
  logo?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  socialMedia?: InputMaybe<SocialMediaSorting>;
  website?: InputMaybe<SortOrder>;
};

export type Pledger = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  birthdate?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  occupation?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  socialMedia?: Maybe<SocialMedia>;
};

export type PledgerFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  address?: InputMaybe<StringFilter>;
  birthdate?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  occupation?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  socialMedia?: InputMaybe<SocialMediaFilter>;
};

export type PledgerSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  birthdate?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  occupation?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  socialMedia?: InputMaybe<SocialMediaSorting>;
};

export type ProgramService = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  descriptionRaw?: Maybe<Scalars['JSON']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  mainImage?: Maybe<Image>;
  slug?: Maybe<Slug>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProgramServiceFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  category?: InputMaybe<StringFilter>;
  endDate?: InputMaybe<DatetimeFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  slug?: InputMaybe<SlugFilter>;
  startDate?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProgramServiceSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  slug?: InputMaybe<SlugSorting>;
  startDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  Article?: Maybe<Article>;
  Author?: Maybe<Author>;
  Beneficiary?: Maybe<Beneficiary>;
  Cause?: Maybe<Cause>;
  Center?: Maybe<Center>;
  Document?: Maybe<Document>;
  Event?: Maybe<Event>;
  MomentsOfHope?: Maybe<MomentsOfHope>;
  Parent?: Maybe<Parent>;
  Partner?: Maybe<Partner>;
  Pledger?: Maybe<Pledger>;
  ProgramService?: Maybe<ProgramService>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  TeamMember?: Maybe<TeamMember>;
  Testimonial?: Maybe<Testimonial>;
  Volunteer?: Maybe<Volunteer>;
  allArticle: Array<Article>;
  allAuthor: Array<Author>;
  allBeneficiary: Array<Beneficiary>;
  allCause: Array<Cause>;
  allCenter: Array<Center>;
  allDocument: Array<Document>;
  allEvent: Array<Event>;
  allMomentsOfHope: Array<MomentsOfHope>;
  allParent: Array<Parent>;
  allPartner: Array<Partner>;
  allPledger: Array<Pledger>;
  allProgramService: Array<ProgramService>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allTeamMember: Array<TeamMember>;
  allTestimonial: Array<Testimonial>;
  allVolunteer: Array<Volunteer>;
};


export type RootQueryArticleArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryBeneficiaryArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryCauseArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryCenterArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryMomentsOfHopeArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryParentArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryPledgerArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryProgramServiceArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTeamMemberArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTestimonialArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryVolunteerArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryAllArticleArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ArticleSorting>>;
  where?: InputMaybe<ArticleFilter>;
};


export type RootQueryAllAuthorArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AuthorSorting>>;
  where?: InputMaybe<AuthorFilter>;
};


export type RootQueryAllBeneficiaryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BeneficiarySorting>>;
  where?: InputMaybe<BeneficiaryFilter>;
};


export type RootQueryAllCauseArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CauseSorting>>;
  where?: InputMaybe<CauseFilter>;
};


export type RootQueryAllCenterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CenterSorting>>;
  where?: InputMaybe<CenterFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllEventArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventSorting>>;
  where?: InputMaybe<EventFilter>;
};


export type RootQueryAllMomentsOfHopeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MomentsOfHopeSorting>>;
  where?: InputMaybe<MomentsOfHopeFilter>;
};


export type RootQueryAllParentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ParentSorting>>;
  where?: InputMaybe<ParentFilter>;
};


export type RootQueryAllPartnerArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PartnerSorting>>;
  where?: InputMaybe<PartnerFilter>;
};


export type RootQueryAllPledgerArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PledgerSorting>>;
  where?: InputMaybe<PledgerFilter>;
};


export type RootQueryAllProgramServiceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProgramServiceSorting>>;
  where?: InputMaybe<ProgramServiceFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllTeamMemberArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TeamMemberSorting>>;
  where?: InputMaybe<TeamMemberFilter>;
};


export type RootQueryAllTestimonialArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TestimonialSorting>>;
  where?: InputMaybe<TestimonialFilter>;
};


export type RootQueryAllVolunteerArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<VolunteerSorting>>;
  where?: InputMaybe<VolunteerFilter>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  blurHash?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']['output']>;
  isOpaque?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']['output']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  foreground?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']['input']>;
};

export type Slug = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export type SocialMedia = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type SocialMediaFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  facebook?: InputMaybe<StringFilter>;
  instagram?: InputMaybe<StringFilter>;
  linkedin?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
};

export type SocialMediaSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  facebook?: InputMaybe<SortOrder>;
  instagram?: InputMaybe<SortOrder>;
  linkedin?: InputMaybe<SortOrder>;
  twitter?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  marks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TeamMember = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  role?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type TeamMemberFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  facebook?: InputMaybe<StringFilter>;
  instagram?: InputMaybe<StringFilter>;
  linkedin?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  role?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
};

export type TeamMemberSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  facebook?: InputMaybe<SortOrder>;
  instagram?: InputMaybe<SortOrder>;
  linkedin?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  role?: InputMaybe<SortOrder>;
  twitter?: InputMaybe<SortOrder>;
};

export type Testimonial = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  authorImage?: Maybe<Image>;
  contentRaw?: Maybe<Scalars['JSON']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  author?: InputMaybe<StringFilter>;
  authorImage?: InputMaybe<ImageFilter>;
  date?: InputMaybe<DatetimeFilter>;
};

export type TestimonialSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  authorImage?: InputMaybe<ImageSorting>;
  date?: InputMaybe<SortOrder>;
};

export type Volunteer = Document & {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  bioRaw?: Maybe<Scalars['JSON']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  joinedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Image>;
  socialMedia?: Maybe<SocialMedia>;
};

export type VolunteerFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  joinedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  photo?: InputMaybe<ImageFilter>;
  socialMedia?: InputMaybe<SocialMediaFilter>;
};

export type VolunteerSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  joinedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  photo?: InputMaybe<ImageSorting>;
  socialMedia?: InputMaybe<SocialMediaSorting>;
};

export type AllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticlesQuery = { allArticle: Array<{ _id?: string | null, _type?: string | null, title?: string | null, publishedAt?: any | null, abstract?: string | null, slug?: { current?: string | null } | null, author?: { firstName?: string | null, lastName?: string | null } | null }> };

export type AllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAuthorsQuery = { allAuthor: Array<{ _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null }> };

export type AllBeneficiariesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBeneficiariesQuery = { allBeneficiary: Array<{ _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, nickname?: string | null, pseudoName?: string | null }> };

export type AllCausesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCausesQuery = { allCause: Array<{ _id?: string | null, _type?: string | null, title?: string | null, startDate?: any | null, endDate?: any | null, goalAmount?: number | null, slug?: { current?: string | null } | null }> };

export type AllCentersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCentersQuery = { allCenter: Array<{ _id?: string | null, _type?: string | null, name?: string | null, address?: string | null, email?: string | null, phone?: string | null }> };

export type AllDocumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDocumentsQuery = { allDocument: Array<{ _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null }> };

export type AllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEventsQuery = { allEvent: Array<{ _id?: string | null, _type?: string | null, title?: string | null, startDate?: any | null, endDate?: any | null, location?: string | null, slug?: { current?: string | null } | null }> };

export type AllMomentsOfHopeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMomentsOfHopeQuery = { allMomentsOfHope: Array<{ _id?: string | null, _type?: string | null, title?: string | null, date?: any | null, link?: string | null }> };

export type AllParentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllParentsQuery = { allParent: Array<{ _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null }> };

export type AllPartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPartnersQuery = { allPartner: Array<{ _id?: string | null, _type?: string | null, name?: string | null, website?: string | null, contactPerson?: string | null, contactEmail?: string | null, contactPhone?: string | null }> };

export type AllPledgersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPledgersQuery = { allPledger: Array<{ _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null }> };

export type AllProgramServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProgramServicesQuery = { allProgramService: Array<{ _id?: string | null, _type?: string | null, title?: string | null, category?: string | null, startDate?: any | null, endDate?: any | null, slug?: { current?: string | null } | null }> };

export type AllSanityFileAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityFileAssetsQuery = { allSanityFileAsset: Array<{ _id?: string | null, _type?: string | null, originalFilename?: string | null, url?: string | null, mimeType?: string | null }> };

export type AllSanityImageAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSanityImageAssetsQuery = { allSanityImageAsset: Array<{ _id?: string | null, _type?: string | null, originalFilename?: string | null, url?: string | null, mimeType?: string | null }> };

export type AllTeamMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTeamMembersQuery = { allTeamMember: Array<{ _id?: string | null, _type?: string | null, name?: string | null, role?: string | null, email?: string | null }> };

export type AllTestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTestimonialsQuery = { allTestimonial: Array<{ _id?: string | null, _type?: string | null, author?: string | null, date?: any | null }> };

export type AllVolunteersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllVolunteersQuery = { allVolunteer: Array<{ _id?: string | null, _type?: string | null, name?: string | null, email?: string | null, phone?: string | null }> };

export type ArticleByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ArticleByIdQuery = { Article?: { _id?: string | null, _type?: string | null, title?: string | null, publishedAt?: any | null, abstract?: string | null, slug?: { current?: string | null } | null, author?: { firstName?: string | null, lastName?: string | null } | null } | null };

export type AuthorByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AuthorByIdQuery = { Author?: { _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type BeneficiaryByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BeneficiaryByIdQuery = { Beneficiary?: { _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, nickname?: string | null, pseudoName?: string | null } | null };

export type CauseByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CauseByIdQuery = { Cause?: { _id?: string | null, _type?: string | null, title?: string | null, startDate?: any | null, endDate?: any | null, goalAmount?: number | null, slug?: { current?: string | null } | null } | null };

export type CenterByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CenterByIdQuery = { Center?: { _id?: string | null, _type?: string | null, name?: string | null, address?: string | null, email?: string | null, phone?: string | null } | null };

export type DocumentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DocumentByIdQuery = { Document?: { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | { _id?: string | null, _type?: string | null } | null };

export type EventByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type EventByIdQuery = { Event?: { _id?: string | null, _type?: string | null, title?: string | null, startDate?: any | null, endDate?: any | null, location?: string | null, slug?: { current?: string | null } | null } | null };

export type MomentsOfHopeByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MomentsOfHopeByIdQuery = { MomentsOfHope?: { _id?: string | null, _type?: string | null, title?: string | null, date?: any | null, link?: string | null } | null };

export type ParentByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ParentByIdQuery = { Parent?: { _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type PartnerByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartnerByIdQuery = { Partner?: { _id?: string | null, _type?: string | null, name?: string | null, website?: string | null, contactPerson?: string | null, contactEmail?: string | null, contactPhone?: string | null } | null };

export type PledgerByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PledgerByIdQuery = { Pledger?: { _id?: string | null, _type?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type ProgramServiceByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProgramServiceByIdQuery = { ProgramService?: { _id?: string | null, _type?: string | null, title?: string | null, category?: string | null, startDate?: any | null, endDate?: any | null, slug?: { current?: string | null } | null } | null };

export type SanityFileAssetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SanityFileAssetByIdQuery = { SanityFileAsset?: { _id?: string | null, _type?: string | null, originalFilename?: string | null, url?: string | null, mimeType?: string | null } | null };

export type SanityImageAssetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SanityImageAssetByIdQuery = { SanityImageAsset?: { _id?: string | null, _type?: string | null, originalFilename?: string | null, url?: string | null, mimeType?: string | null } | null };

export type TeamMemberByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TeamMemberByIdQuery = { TeamMember?: { _id?: string | null, _type?: string | null, name?: string | null, role?: string | null, email?: string | null } | null };

export type TestimonialByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TestimonialByIdQuery = { Testimonial?: { _id?: string | null, _type?: string | null, author?: string | null, date?: any | null } | null };

export type VolunteerByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type VolunteerByIdQuery = { Volunteer?: { _id?: string | null, _type?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null };


export const AllArticlesDocument = gql`
    query AllArticles {
  allArticle {
    _id
    _type
    title
    slug {
      current
    }
    publishedAt
    abstract
    author {
      firstName
      lastName
    }
  }
}
    `;
export const AllAuthorsDocument = gql`
    query AllAuthors {
  allAuthor {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const AllBeneficiariesDocument = gql`
    query AllBeneficiaries {
  allBeneficiary {
    _id
    _type
    firstName
    lastName
    nickname
    pseudoName
  }
}
    `;
export const AllCausesDocument = gql`
    query AllCauses {
  allCause {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    goalAmount
  }
}
    `;
export const AllCentersDocument = gql`
    query AllCenters {
  allCenter {
    _id
    _type
    name
    address
    email
    phone
  }
}
    `;
export const AllDocumentsDocument = gql`
    query AllDocuments {
  allDocument {
    _id
    _type
  }
}
    `;
export const AllEventsDocument = gql`
    query AllEvents {
  allEvent {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    location
  }
}
    `;
export const AllMomentsOfHopeDocument = gql`
    query AllMomentsOfHope {
  allMomentsOfHope {
    _id
    _type
    title
    date
    link
  }
}
    `;
export const AllParentsDocument = gql`
    query AllParents {
  allParent {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const AllPartnersDocument = gql`
    query AllPartners {
  allPartner {
    _id
    _type
    name
    website
    contactPerson
    contactEmail
    contactPhone
  }
}
    `;
export const AllPledgersDocument = gql`
    query AllPledgers {
  allPledger {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const AllProgramServicesDocument = gql`
    query AllProgramServices {
  allProgramService {
    _id
    _type
    title
    slug {
      current
    }
    category
    startDate
    endDate
  }
}
    `;
export const AllSanityFileAssetsDocument = gql`
    query AllSanityFileAssets {
  allSanityFileAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
}
    `;
export const AllSanityImageAssetsDocument = gql`
    query AllSanityImageAssets {
  allSanityImageAsset {
    _id
    _type
    originalFilename
    url
    mimeType
  }
}
    `;
export const AllTeamMembersDocument = gql`
    query AllTeamMembers {
  allTeamMember {
    _id
    _type
    name
    role
    email
  }
}
    `;
export const AllTestimonialsDocument = gql`
    query AllTestimonials {
  allTestimonial {
    _id
    _type
    author
    date
  }
}
    `;
export const AllVolunteersDocument = gql`
    query AllVolunteers {
  allVolunteer {
    _id
    _type
    name
    email
    phone
  }
}
    `;
export const ArticleByIdDocument = gql`
    query ArticleById($id: ID!) {
  Article(id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    publishedAt
    abstract
    author {
      firstName
      lastName
    }
  }
}
    `;
export const AuthorByIdDocument = gql`
    query AuthorById($id: ID!) {
  Author(id: $id) {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const BeneficiaryByIdDocument = gql`
    query BeneficiaryById($id: ID!) {
  Beneficiary(id: $id) {
    _id
    _type
    firstName
    lastName
    nickname
    pseudoName
  }
}
    `;
export const CauseByIdDocument = gql`
    query CauseById($id: ID!) {
  Cause(id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    goalAmount
  }
}
    `;
export const CenterByIdDocument = gql`
    query CenterById($id: ID!) {
  Center(id: $id) {
    _id
    _type
    name
    address
    email
    phone
  }
}
    `;
export const DocumentByIdDocument = gql`
    query DocumentById($id: ID!) {
  Document(id: $id) {
    _id
    _type
  }
}
    `;
export const EventByIdDocument = gql`
    query EventById($id: ID!) {
  Event(id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    startDate
    endDate
    location
  }
}
    `;
export const MomentsOfHopeByIdDocument = gql`
    query MomentsOfHopeById($id: ID!) {
  MomentsOfHope(id: $id) {
    _id
    _type
    title
    date
    link
  }
}
    `;
export const ParentByIdDocument = gql`
    query ParentById($id: ID!) {
  Parent(id: $id) {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const PartnerByIdDocument = gql`
    query PartnerById($id: ID!) {
  Partner(id: $id) {
    _id
    _type
    name
    website
    contactPerson
    contactEmail
    contactPhone
  }
}
    `;
export const PledgerByIdDocument = gql`
    query PledgerById($id: ID!) {
  Pledger(id: $id) {
    _id
    _type
    firstName
    lastName
    email
  }
}
    `;
export const ProgramServiceByIdDocument = gql`
    query ProgramServiceById($id: ID!) {
  ProgramService(id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    category
    startDate
    endDate
  }
}
    `;
export const SanityFileAssetByIdDocument = gql`
    query SanityFileAssetById($id: ID!) {
  SanityFileAsset(id: $id) {
    _id
    _type
    originalFilename
    url
    mimeType
  }
}
    `;
export const SanityImageAssetByIdDocument = gql`
    query SanityImageAssetById($id: ID!) {
  SanityImageAsset(id: $id) {
    _id
    _type
    originalFilename
    url
    mimeType
  }
}
    `;
export const TeamMemberByIdDocument = gql`
    query TeamMemberById($id: ID!) {
  TeamMember(id: $id) {
    _id
    _type
    name
    role
    email
  }
}
    `;
export const TestimonialByIdDocument = gql`
    query TestimonialById($id: ID!) {
  Testimonial(id: $id) {
    _id
    _type
    author
    date
  }
}
    `;
export const VolunteerByIdDocument = gql`
    query VolunteerById($id: ID!) {
  Volunteer(id: $id) {
    _id
    _type
    name
    email
    phone
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const AllArticlesDocumentString = print(AllArticlesDocument);
const AllAuthorsDocumentString = print(AllAuthorsDocument);
const AllBeneficiariesDocumentString = print(AllBeneficiariesDocument);
const AllCausesDocumentString = print(AllCausesDocument);
const AllCentersDocumentString = print(AllCentersDocument);
const AllDocumentsDocumentString = print(AllDocumentsDocument);
const AllEventsDocumentString = print(AllEventsDocument);
const AllMomentsOfHopeDocumentString = print(AllMomentsOfHopeDocument);
const AllParentsDocumentString = print(AllParentsDocument);
const AllPartnersDocumentString = print(AllPartnersDocument);
const AllPledgersDocumentString = print(AllPledgersDocument);
const AllProgramServicesDocumentString = print(AllProgramServicesDocument);
const AllSanityFileAssetsDocumentString = print(AllSanityFileAssetsDocument);
const AllSanityImageAssetsDocumentString = print(AllSanityImageAssetsDocument);
const AllTeamMembersDocumentString = print(AllTeamMembersDocument);
const AllTestimonialsDocumentString = print(AllTestimonialsDocument);
const AllVolunteersDocumentString = print(AllVolunteersDocument);
const ArticleByIdDocumentString = print(ArticleByIdDocument);
const AuthorByIdDocumentString = print(AuthorByIdDocument);
const BeneficiaryByIdDocumentString = print(BeneficiaryByIdDocument);
const CauseByIdDocumentString = print(CauseByIdDocument);
const CenterByIdDocumentString = print(CenterByIdDocument);
const DocumentByIdDocumentString = print(DocumentByIdDocument);
const EventByIdDocumentString = print(EventByIdDocument);
const MomentsOfHopeByIdDocumentString = print(MomentsOfHopeByIdDocument);
const ParentByIdDocumentString = print(ParentByIdDocument);
const PartnerByIdDocumentString = print(PartnerByIdDocument);
const PledgerByIdDocumentString = print(PledgerByIdDocument);
const ProgramServiceByIdDocumentString = print(ProgramServiceByIdDocument);
const SanityFileAssetByIdDocumentString = print(SanityFileAssetByIdDocument);
const SanityImageAssetByIdDocumentString = print(SanityImageAssetByIdDocument);
const TeamMemberByIdDocumentString = print(TeamMemberByIdDocument);
const TestimonialByIdDocumentString = print(TestimonialByIdDocument);
const VolunteerByIdDocumentString = print(VolunteerByIdDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllArticles(variables?: AllArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllArticlesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllArticlesQuery>(AllArticlesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllArticles', 'query', variables);
    },
    AllAuthors(variables?: AllAuthorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllAuthorsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllAuthorsQuery>(AllAuthorsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllAuthors', 'query', variables);
    },
    AllBeneficiaries(variables?: AllBeneficiariesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllBeneficiariesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllBeneficiariesQuery>(AllBeneficiariesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllBeneficiaries', 'query', variables);
    },
    AllCauses(variables?: AllCausesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllCausesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllCausesQuery>(AllCausesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllCauses', 'query', variables);
    },
    AllCenters(variables?: AllCentersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllCentersQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllCentersQuery>(AllCentersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllCenters', 'query', variables);
    },
    AllDocuments(variables?: AllDocumentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllDocumentsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllDocumentsQuery>(AllDocumentsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllDocuments', 'query', variables);
    },
    AllEvents(variables?: AllEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllEventsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllEventsQuery>(AllEventsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllEvents', 'query', variables);
    },
    AllMomentsOfHope(variables?: AllMomentsOfHopeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllMomentsOfHopeQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllMomentsOfHopeQuery>(AllMomentsOfHopeDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllMomentsOfHope', 'query', variables);
    },
    AllParents(variables?: AllParentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllParentsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllParentsQuery>(AllParentsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllParents', 'query', variables);
    },
    AllPartners(variables?: AllPartnersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllPartnersQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllPartnersQuery>(AllPartnersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPartners', 'query', variables);
    },
    AllPledgers(variables?: AllPledgersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllPledgersQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllPledgersQuery>(AllPledgersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPledgers', 'query', variables);
    },
    AllProgramServices(variables?: AllProgramServicesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllProgramServicesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllProgramServicesQuery>(AllProgramServicesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllProgramServices', 'query', variables);
    },
    AllSanityFileAssets(variables?: AllSanityFileAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllSanityFileAssetsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllSanityFileAssetsQuery>(AllSanityFileAssetsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllSanityFileAssets', 'query', variables);
    },
    AllSanityImageAssets(variables?: AllSanityImageAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllSanityImageAssetsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllSanityImageAssetsQuery>(AllSanityImageAssetsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllSanityImageAssets', 'query', variables);
    },
    AllTeamMembers(variables?: AllTeamMembersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllTeamMembersQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllTeamMembersQuery>(AllTeamMembersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllTeamMembers', 'query', variables);
    },
    AllTestimonials(variables?: AllTestimonialsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllTestimonialsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllTestimonialsQuery>(AllTestimonialsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllTestimonials', 'query', variables);
    },
    AllVolunteers(variables?: AllVolunteersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AllVolunteersQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AllVolunteersQuery>(AllVolunteersDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllVolunteers', 'query', variables);
    },
    ArticleById(variables: ArticleByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ArticleByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ArticleByIdQuery>(ArticleByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ArticleById', 'query', variables);
    },
    AuthorById(variables: AuthorByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AuthorByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AuthorByIdQuery>(AuthorByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AuthorById', 'query', variables);
    },
    BeneficiaryById(variables: BeneficiaryByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: BeneficiaryByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<BeneficiaryByIdQuery>(BeneficiaryByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BeneficiaryById', 'query', variables);
    },
    CauseById(variables: CauseByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CauseByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CauseByIdQuery>(CauseByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CauseById', 'query', variables);
    },
    CenterById(variables: CenterByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CenterByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CenterByIdQuery>(CenterByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CenterById', 'query', variables);
    },
    DocumentById(variables: DocumentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DocumentByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DocumentByIdQuery>(DocumentByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DocumentById', 'query', variables);
    },
    EventById(variables: EventByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: EventByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<EventByIdQuery>(EventByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'EventById', 'query', variables);
    },
    MomentsOfHopeById(variables: MomentsOfHopeByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: MomentsOfHopeByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<MomentsOfHopeByIdQuery>(MomentsOfHopeByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MomentsOfHopeById', 'query', variables);
    },
    ParentById(variables: ParentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ParentByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ParentByIdQuery>(ParentByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ParentById', 'query', variables);
    },
    PartnerById(variables: PartnerByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PartnerByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PartnerByIdQuery>(PartnerByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PartnerById', 'query', variables);
    },
    PledgerById(variables: PledgerByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: PledgerByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<PledgerByIdQuery>(PledgerByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PledgerById', 'query', variables);
    },
    ProgramServiceById(variables: ProgramServiceByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ProgramServiceByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ProgramServiceByIdQuery>(ProgramServiceByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProgramServiceById', 'query', variables);
    },
    SanityFileAssetById(variables: SanityFileAssetByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SanityFileAssetByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SanityFileAssetByIdQuery>(SanityFileAssetByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SanityFileAssetById', 'query', variables);
    },
    SanityImageAssetById(variables: SanityImageAssetByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SanityImageAssetByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SanityImageAssetByIdQuery>(SanityImageAssetByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SanityImageAssetById', 'query', variables);
    },
    TeamMemberById(variables: TeamMemberByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TeamMemberByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TeamMemberByIdQuery>(TeamMemberByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeamMemberById', 'query', variables);
    },
    TestimonialById(variables: TestimonialByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TestimonialByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TestimonialByIdQuery>(TestimonialByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TestimonialById', 'query', variables);
    },
    VolunteerById(variables: VolunteerByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: VolunteerByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<VolunteerByIdQuery>(VolunteerByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VolunteerById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;