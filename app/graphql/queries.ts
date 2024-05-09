/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFlyerTheme = /* GraphQL */ `query GetFlyerTheme($id: ID!) {
  getFlyerTheme(id: $id) {
    id
    model {
      id
      name
      width
      height
      max_itens
      publicated
      createdAt
      updatedAt
      __typename
    }
    style {
      id
      font_size
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    flyerThemeModelId
    flyerThemeStyleId
    flyerThemeCategoryId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlyerThemeQueryVariables,
  APITypes.GetFlyerThemeQuery
>;
export const listFlyerThemes = /* GraphQL */ `query ListFlyerThemes(
  $filter: ModelFlyerThemeFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlyerThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      flyerThemeModelId
      flyerThemeStyleId
      flyerThemeCategoryId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlyerThemesQueryVariables,
  APITypes.ListFlyerThemesQuery
>;
export const getFlyerCategory = /* GraphQL */ `query GetFlyerCategory($id: ID!) {
  getFlyerCategory(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlyerCategoryQueryVariables,
  APITypes.GetFlyerCategoryQuery
>;
export const listFlyerCategories = /* GraphQL */ `query ListFlyerCategories(
  $filter: ModelFlyerCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlyerCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlyerCategoriesQueryVariables,
  APITypes.ListFlyerCategoriesQuery
>;
export const getFlyerThemeStyle = /* GraphQL */ `query GetFlyerThemeStyle($id: ID!) {
  getFlyerThemeStyle(id: $id) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlyerThemeStyleQueryVariables,
  APITypes.GetFlyerThemeStyleQuery
>;
export const listFlyerThemeStyles = /* GraphQL */ `query ListFlyerThemeStyles(
  $filter: ModelFlyerThemeStyleFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlyerThemeStyles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      font_size
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlyerThemeStylesQueryVariables,
  APITypes.ListFlyerThemeStylesQuery
>;
export const getFlyerModel = /* GraphQL */ `query GetFlyerModel($id: ID!) {
  getFlyerModel(id: $id) {
    id
    name
    width
    height
    max_itens
    publicated
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFlyerModelQueryVariables,
  APITypes.GetFlyerModelQuery
>;
export const listFlyerModels = /* GraphQL */ `query ListFlyerModels(
  $filter: ModelFlyerModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listFlyerModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      width
      height
      max_itens
      publicated
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFlyerModelsQueryVariables,
  APITypes.ListFlyerModelsQuery
>;
