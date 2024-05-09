/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFlyerTheme = /* GraphQL */ `mutation CreateFlyerTheme(
  $input: CreateFlyerThemeInput!
  $condition: ModelFlyerThemeConditionInput
) {
  createFlyerTheme(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFlyerThemeMutationVariables,
  APITypes.CreateFlyerThemeMutation
>;
export const updateFlyerTheme = /* GraphQL */ `mutation UpdateFlyerTheme(
  $input: UpdateFlyerThemeInput!
  $condition: ModelFlyerThemeConditionInput
) {
  updateFlyerTheme(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFlyerThemeMutationVariables,
  APITypes.UpdateFlyerThemeMutation
>;
export const deleteFlyerTheme = /* GraphQL */ `mutation DeleteFlyerTheme(
  $input: DeleteFlyerThemeInput!
  $condition: ModelFlyerThemeConditionInput
) {
  deleteFlyerTheme(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFlyerThemeMutationVariables,
  APITypes.DeleteFlyerThemeMutation
>;
export const createFlyerCategory = /* GraphQL */ `mutation CreateFlyerCategory(
  $input: CreateFlyerCategoryInput!
  $condition: ModelFlyerCategoryConditionInput
) {
  createFlyerCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlyerCategoryMutationVariables,
  APITypes.CreateFlyerCategoryMutation
>;
export const updateFlyerCategory = /* GraphQL */ `mutation UpdateFlyerCategory(
  $input: UpdateFlyerCategoryInput!
  $condition: ModelFlyerCategoryConditionInput
) {
  updateFlyerCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlyerCategoryMutationVariables,
  APITypes.UpdateFlyerCategoryMutation
>;
export const deleteFlyerCategory = /* GraphQL */ `mutation DeleteFlyerCategory(
  $input: DeleteFlyerCategoryInput!
  $condition: ModelFlyerCategoryConditionInput
) {
  deleteFlyerCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlyerCategoryMutationVariables,
  APITypes.DeleteFlyerCategoryMutation
>;
export const createFlyerThemeStyle = /* GraphQL */ `mutation CreateFlyerThemeStyle(
  $input: CreateFlyerThemeStyleInput!
  $condition: ModelFlyerThemeStyleConditionInput
) {
  createFlyerThemeStyle(input: $input, condition: $condition) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFlyerThemeStyleMutationVariables,
  APITypes.CreateFlyerThemeStyleMutation
>;
export const updateFlyerThemeStyle = /* GraphQL */ `mutation UpdateFlyerThemeStyle(
  $input: UpdateFlyerThemeStyleInput!
  $condition: ModelFlyerThemeStyleConditionInput
) {
  updateFlyerThemeStyle(input: $input, condition: $condition) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFlyerThemeStyleMutationVariables,
  APITypes.UpdateFlyerThemeStyleMutation
>;
export const deleteFlyerThemeStyle = /* GraphQL */ `mutation DeleteFlyerThemeStyle(
  $input: DeleteFlyerThemeStyleInput!
  $condition: ModelFlyerThemeStyleConditionInput
) {
  deleteFlyerThemeStyle(input: $input, condition: $condition) {
    id
    font_size
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFlyerThemeStyleMutationVariables,
  APITypes.DeleteFlyerThemeStyleMutation
>;
export const createFlyerModel = /* GraphQL */ `mutation CreateFlyerModel(
  $input: CreateFlyerModelInput!
  $condition: ModelFlyerModelConditionInput
) {
  createFlyerModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFlyerModelMutationVariables,
  APITypes.CreateFlyerModelMutation
>;
export const updateFlyerModel = /* GraphQL */ `mutation UpdateFlyerModel(
  $input: UpdateFlyerModelInput!
  $condition: ModelFlyerModelConditionInput
) {
  updateFlyerModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFlyerModelMutationVariables,
  APITypes.UpdateFlyerModelMutation
>;
export const deleteFlyerModel = /* GraphQL */ `mutation DeleteFlyerModel(
  $input: DeleteFlyerModelInput!
  $condition: ModelFlyerModelConditionInput
) {
  deleteFlyerModel(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFlyerModelMutationVariables,
  APITypes.DeleteFlyerModelMutation
>;
