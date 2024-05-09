/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFlyerTheme = /* GraphQL */ `subscription OnCreateFlyerTheme(
  $filter: ModelSubscriptionFlyerThemeFilterInput
) {
  onCreateFlyerTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFlyerThemeSubscriptionVariables,
  APITypes.OnCreateFlyerThemeSubscription
>;
export const onUpdateFlyerTheme = /* GraphQL */ `subscription OnUpdateFlyerTheme(
  $filter: ModelSubscriptionFlyerThemeFilterInput
) {
  onUpdateFlyerTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFlyerThemeSubscriptionVariables,
  APITypes.OnUpdateFlyerThemeSubscription
>;
export const onDeleteFlyerTheme = /* GraphQL */ `subscription OnDeleteFlyerTheme(
  $filter: ModelSubscriptionFlyerThemeFilterInput
) {
  onDeleteFlyerTheme(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFlyerThemeSubscriptionVariables,
  APITypes.OnDeleteFlyerThemeSubscription
>;
export const onCreateFlyerCategory = /* GraphQL */ `subscription OnCreateFlyerCategory(
  $filter: ModelSubscriptionFlyerCategoryFilterInput
) {
  onCreateFlyerCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlyerCategorySubscriptionVariables,
  APITypes.OnCreateFlyerCategorySubscription
>;
export const onUpdateFlyerCategory = /* GraphQL */ `subscription OnUpdateFlyerCategory(
  $filter: ModelSubscriptionFlyerCategoryFilterInput
) {
  onUpdateFlyerCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlyerCategorySubscriptionVariables,
  APITypes.OnUpdateFlyerCategorySubscription
>;
export const onDeleteFlyerCategory = /* GraphQL */ `subscription OnDeleteFlyerCategory(
  $filter: ModelSubscriptionFlyerCategoryFilterInput
) {
  onDeleteFlyerCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlyerCategorySubscriptionVariables,
  APITypes.OnDeleteFlyerCategorySubscription
>;
export const onCreateFlyerThemeStyle = /* GraphQL */ `subscription OnCreateFlyerThemeStyle(
  $filter: ModelSubscriptionFlyerThemeStyleFilterInput
) {
  onCreateFlyerThemeStyle(filter: $filter) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFlyerThemeStyleSubscriptionVariables,
  APITypes.OnCreateFlyerThemeStyleSubscription
>;
export const onUpdateFlyerThemeStyle = /* GraphQL */ `subscription OnUpdateFlyerThemeStyle(
  $filter: ModelSubscriptionFlyerThemeStyleFilterInput
) {
  onUpdateFlyerThemeStyle(filter: $filter) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFlyerThemeStyleSubscriptionVariables,
  APITypes.OnUpdateFlyerThemeStyleSubscription
>;
export const onDeleteFlyerThemeStyle = /* GraphQL */ `subscription OnDeleteFlyerThemeStyle(
  $filter: ModelSubscriptionFlyerThemeStyleFilterInput
) {
  onDeleteFlyerThemeStyle(filter: $filter) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFlyerThemeStyleSubscriptionVariables,
  APITypes.OnDeleteFlyerThemeStyleSubscription
>;
export const onCreateFlyerModel = /* GraphQL */ `subscription OnCreateFlyerModel(
  $filter: ModelSubscriptionFlyerModelFilterInput
) {
  onCreateFlyerModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFlyerModelSubscriptionVariables,
  APITypes.OnCreateFlyerModelSubscription
>;
export const onUpdateFlyerModel = /* GraphQL */ `subscription OnUpdateFlyerModel(
  $filter: ModelSubscriptionFlyerModelFilterInput
) {
  onUpdateFlyerModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFlyerModelSubscriptionVariables,
  APITypes.OnUpdateFlyerModelSubscription
>;
export const onDeleteFlyerModel = /* GraphQL */ `subscription OnDeleteFlyerModel(
  $filter: ModelSubscriptionFlyerModelFilterInput
) {
  onDeleteFlyerModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFlyerModelSubscriptionVariables,
  APITypes.OnDeleteFlyerModelSubscription
>;
