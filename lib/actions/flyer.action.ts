'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';

import { revalidatePath } from 'next/cache';
import * as mutations from '@/app/graphql/mutations';
import * as query from '@/app/graphql/queries';

import config from '@/app/amplifyconfiguration.json';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies
});

const FlyerModelFormSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(50),
  width: z.string().min(3).max(4),
  height: z.string().min(3).max(4),
  max_items: z.string().min(1).max(20),
  publicated: z.boolean(),
});

const CreateFlyerModel = FlyerModelFormSchema.omit({ id: true });

// This is temporary
export type FlyerModelState = {
  errors?: {
    name?: string[];
    width?: string[];
    height?: string[];
    max_items?: string[];
    publicated?: string[];
  };
  message?: string | null;
};

export async function createFlyerModel(prevState: FlyerModelState, formData: FormData) {
  const validatedFields = CreateFlyerModel.safeParse({
    name: formData.get('name'),
    width: formData.get('width'),
    height: formData.get('height'),
    max_items: formData.get('max_items'),
    publicated: formData.get('publicated') === "true" ? true: false,
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Model.',
    };
  }

  const { name, width, height, max_items, publicated } = validatedFields.data;

  try {
    await cookiesClient.graphql({
      query: mutations.createFlyerModel,
      variables: {
        input: {
          name,
          width: parseInt(width),
          height: parseInt(height),
          max_itens: parseInt(max_items),
          publicated,
        }
      }
    })
  } catch(error) {
    return {
      message: 'Database Error: Failed to Create Model.'
    }
  }

  revalidatePath('/dashboard/flyer-models');
  redirect('/dashboard/flyer-models');
}

export async function listFlyerModels() {
  const data = await cookiesClient.graphql({
    query: query.listFlyerModels
  })

  return data;
}