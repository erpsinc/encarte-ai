/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFlyerThemeInput = {
  id?: string | null,
  flyerThemeModelId?: string | null,
  flyerThemeStyleId?: string | null,
  flyerThemeCategoryId?: string | null,
};

export type ModelFlyerThemeConditionInput = {
  and?: Array< ModelFlyerThemeConditionInput | null > | null,
  or?: Array< ModelFlyerThemeConditionInput | null > | null,
  not?: ModelFlyerThemeConditionInput | null,
  flyerThemeModelId?: ModelIDInput | null,
  flyerThemeStyleId?: ModelIDInput | null,
  flyerThemeCategoryId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type FlyerTheme = {
  __typename: "FlyerTheme",
  id: string,
  model?: FlyerModel | null,
  style?: FlyerThemeStyle | null,
  category?: FlyerCategory | null,
  createdAt: string,
  updatedAt: string,
  flyerThemeModelId?: string | null,
  flyerThemeStyleId?: string | null,
  flyerThemeCategoryId?: string | null,
};

export type FlyerModel = {
  __typename: "FlyerModel",
  id: string,
  name: string,
  width: number,
  height: number,
  max_itens: number,
  publicated: boolean,
  createdAt: string,
  updatedAt: string,
};

export type FlyerThemeStyle = {
  __typename: "FlyerThemeStyle",
  id: string,
  font_size: number,
  createdAt: string,
  updatedAt: string,
};

export type FlyerCategory = {
  __typename: "FlyerCategory",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFlyerThemeInput = {
  id: string,
  flyerThemeModelId?: string | null,
  flyerThemeStyleId?: string | null,
  flyerThemeCategoryId?: string | null,
};

export type DeleteFlyerThemeInput = {
  id: string,
};

export type CreateFlyerCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelFlyerCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelFlyerCategoryConditionInput | null > | null,
  or?: Array< ModelFlyerCategoryConditionInput | null > | null,
  not?: ModelFlyerCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFlyerCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteFlyerCategoryInput = {
  id: string,
};

export type CreateFlyerThemeStyleInput = {
  id?: string | null,
  font_size: number,
};

export type ModelFlyerThemeStyleConditionInput = {
  font_size?: ModelIntInput | null,
  and?: Array< ModelFlyerThemeStyleConditionInput | null > | null,
  or?: Array< ModelFlyerThemeStyleConditionInput | null > | null,
  not?: ModelFlyerThemeStyleConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFlyerThemeStyleInput = {
  id: string,
  font_size?: number | null,
};

export type DeleteFlyerThemeStyleInput = {
  id: string,
};

export type CreateFlyerModelInput = {
  id?: string | null,
  name: string,
  width: number,
  height: number,
  max_itens: number,
  publicated: boolean,
};

export type ModelFlyerModelConditionInput = {
  name?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  max_itens?: ModelIntInput | null,
  publicated?: ModelBooleanInput | null,
  and?: Array< ModelFlyerModelConditionInput | null > | null,
  or?: Array< ModelFlyerModelConditionInput | null > | null,
  not?: ModelFlyerModelConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFlyerModelInput = {
  id: string,
  name?: string | null,
  width?: number | null,
  height?: number | null,
  max_itens?: number | null,
  publicated?: boolean | null,
};

export type DeleteFlyerModelInput = {
  id: string,
};

export type ModelFlyerThemeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelFlyerThemeFilterInput | null > | null,
  or?: Array< ModelFlyerThemeFilterInput | null > | null,
  not?: ModelFlyerThemeFilterInput | null,
  flyerThemeModelId?: ModelIDInput | null,
  flyerThemeStyleId?: ModelIDInput | null,
  flyerThemeCategoryId?: ModelIDInput | null,
};

export type ModelFlyerThemeConnection = {
  __typename: "ModelFlyerThemeConnection",
  items:  Array<FlyerTheme | null >,
  nextToken?: string | null,
};

export type ModelFlyerCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelFlyerCategoryFilterInput | null > | null,
  or?: Array< ModelFlyerCategoryFilterInput | null > | null,
  not?: ModelFlyerCategoryFilterInput | null,
};

export type ModelFlyerCategoryConnection = {
  __typename: "ModelFlyerCategoryConnection",
  items:  Array<FlyerCategory | null >,
  nextToken?: string | null,
};

export type ModelFlyerThemeStyleFilterInput = {
  id?: ModelIDInput | null,
  font_size?: ModelIntInput | null,
  and?: Array< ModelFlyerThemeStyleFilterInput | null > | null,
  or?: Array< ModelFlyerThemeStyleFilterInput | null > | null,
  not?: ModelFlyerThemeStyleFilterInput | null,
};

export type ModelFlyerThemeStyleConnection = {
  __typename: "ModelFlyerThemeStyleConnection",
  items:  Array<FlyerThemeStyle | null >,
  nextToken?: string | null,
};

export type ModelFlyerModelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  max_itens?: ModelIntInput | null,
  publicated?: ModelBooleanInput | null,
  and?: Array< ModelFlyerModelFilterInput | null > | null,
  or?: Array< ModelFlyerModelFilterInput | null > | null,
  not?: ModelFlyerModelFilterInput | null,
};

export type ModelFlyerModelConnection = {
  __typename: "ModelFlyerModelConnection",
  items:  Array<FlyerModel | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFlyerThemeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFlyerThemeFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlyerThemeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFlyerCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlyerCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlyerCategoryFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFlyerThemeStyleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  font_size?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionFlyerThemeStyleFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlyerThemeStyleFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFlyerModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  max_itens?: ModelSubscriptionIntInput | null,
  publicated?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionFlyerModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlyerModelFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateFlyerThemeMutationVariables = {
  input: CreateFlyerThemeInput,
  condition?: ModelFlyerThemeConditionInput | null,
};

export type CreateFlyerThemeMutation = {
  createFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type UpdateFlyerThemeMutationVariables = {
  input: UpdateFlyerThemeInput,
  condition?: ModelFlyerThemeConditionInput | null,
};

export type UpdateFlyerThemeMutation = {
  updateFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type DeleteFlyerThemeMutationVariables = {
  input: DeleteFlyerThemeInput,
  condition?: ModelFlyerThemeConditionInput | null,
};

export type DeleteFlyerThemeMutation = {
  deleteFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type CreateFlyerCategoryMutationVariables = {
  input: CreateFlyerCategoryInput,
  condition?: ModelFlyerCategoryConditionInput | null,
};

export type CreateFlyerCategoryMutation = {
  createFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlyerCategoryMutationVariables = {
  input: UpdateFlyerCategoryInput,
  condition?: ModelFlyerCategoryConditionInput | null,
};

export type UpdateFlyerCategoryMutation = {
  updateFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlyerCategoryMutationVariables = {
  input: DeleteFlyerCategoryInput,
  condition?: ModelFlyerCategoryConditionInput | null,
};

export type DeleteFlyerCategoryMutation = {
  deleteFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFlyerThemeStyleMutationVariables = {
  input: CreateFlyerThemeStyleInput,
  condition?: ModelFlyerThemeStyleConditionInput | null,
};

export type CreateFlyerThemeStyleMutation = {
  createFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlyerThemeStyleMutationVariables = {
  input: UpdateFlyerThemeStyleInput,
  condition?: ModelFlyerThemeStyleConditionInput | null,
};

export type UpdateFlyerThemeStyleMutation = {
  updateFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlyerThemeStyleMutationVariables = {
  input: DeleteFlyerThemeStyleInput,
  condition?: ModelFlyerThemeStyleConditionInput | null,
};

export type DeleteFlyerThemeStyleMutation = {
  deleteFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFlyerModelMutationVariables = {
  input: CreateFlyerModelInput,
  condition?: ModelFlyerModelConditionInput | null,
};

export type CreateFlyerModelMutation = {
  createFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlyerModelMutationVariables = {
  input: UpdateFlyerModelInput,
  condition?: ModelFlyerModelConditionInput | null,
};

export type UpdateFlyerModelMutation = {
  updateFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlyerModelMutationVariables = {
  input: DeleteFlyerModelInput,
  condition?: ModelFlyerModelConditionInput | null,
};

export type DeleteFlyerModelMutation = {
  deleteFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFlyerThemeQueryVariables = {
  id: string,
};

export type GetFlyerThemeQuery = {
  getFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type ListFlyerThemesQueryVariables = {
  filter?: ModelFlyerThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlyerThemesQuery = {
  listFlyerThemes?:  {
    __typename: "ModelFlyerThemeConnection",
    items:  Array< {
      __typename: "FlyerTheme",
      id: string,
      createdAt: string,
      updatedAt: string,
      flyerThemeModelId?: string | null,
      flyerThemeStyleId?: string | null,
      flyerThemeCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFlyerCategoryQueryVariables = {
  id: string,
};

export type GetFlyerCategoryQuery = {
  getFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlyerCategoriesQueryVariables = {
  filter?: ModelFlyerCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlyerCategoriesQuery = {
  listFlyerCategories?:  {
    __typename: "ModelFlyerCategoryConnection",
    items:  Array< {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFlyerThemeStyleQueryVariables = {
  id: string,
};

export type GetFlyerThemeStyleQuery = {
  getFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlyerThemeStylesQueryVariables = {
  filter?: ModelFlyerThemeStyleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlyerThemeStylesQuery = {
  listFlyerThemeStyles?:  {
    __typename: "ModelFlyerThemeStyleConnection",
    items:  Array< {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFlyerModelQueryVariables = {
  id: string,
};

export type GetFlyerModelQuery = {
  getFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlyerModelsQueryVariables = {
  filter?: ModelFlyerModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlyerModelsQuery = {
  listFlyerModels?:  {
    __typename: "ModelFlyerModelConnection",
    items:  Array< {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFlyerThemeSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeFilterInput | null,
};

export type OnCreateFlyerThemeSubscription = {
  onCreateFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type OnUpdateFlyerThemeSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeFilterInput | null,
};

export type OnUpdateFlyerThemeSubscription = {
  onUpdateFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type OnDeleteFlyerThemeSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeFilterInput | null,
};

export type OnDeleteFlyerThemeSubscription = {
  onDeleteFlyerTheme?:  {
    __typename: "FlyerTheme",
    id: string,
    model?:  {
      __typename: "FlyerModel",
      id: string,
      name: string,
      width: number,
      height: number,
      max_itens: number,
      publicated: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    style?:  {
      __typename: "FlyerThemeStyle",
      id: string,
      font_size: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "FlyerCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    flyerThemeModelId?: string | null,
    flyerThemeStyleId?: string | null,
    flyerThemeCategoryId?: string | null,
  } | null,
};

export type OnCreateFlyerCategorySubscriptionVariables = {
  filter?: ModelSubscriptionFlyerCategoryFilterInput | null,
};

export type OnCreateFlyerCategorySubscription = {
  onCreateFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlyerCategorySubscriptionVariables = {
  filter?: ModelSubscriptionFlyerCategoryFilterInput | null,
};

export type OnUpdateFlyerCategorySubscription = {
  onUpdateFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlyerCategorySubscriptionVariables = {
  filter?: ModelSubscriptionFlyerCategoryFilterInput | null,
};

export type OnDeleteFlyerCategorySubscription = {
  onDeleteFlyerCategory?:  {
    __typename: "FlyerCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFlyerThemeStyleSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeStyleFilterInput | null,
};

export type OnCreateFlyerThemeStyleSubscription = {
  onCreateFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlyerThemeStyleSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeStyleFilterInput | null,
};

export type OnUpdateFlyerThemeStyleSubscription = {
  onUpdateFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlyerThemeStyleSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerThemeStyleFilterInput | null,
};

export type OnDeleteFlyerThemeStyleSubscription = {
  onDeleteFlyerThemeStyle?:  {
    __typename: "FlyerThemeStyle",
    id: string,
    font_size: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFlyerModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerModelFilterInput | null,
};

export type OnCreateFlyerModelSubscription = {
  onCreateFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlyerModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerModelFilterInput | null,
};

export type OnUpdateFlyerModelSubscription = {
  onUpdateFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlyerModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlyerModelFilterInput | null,
};

export type OnDeleteFlyerModelSubscription = {
  onDeleteFlyerModel?:  {
    __typename: "FlyerModel",
    id: string,
    name: string,
    width: number,
    height: number,
    max_itens: number,
    publicated: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
