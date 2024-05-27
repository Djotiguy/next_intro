import React from 'react';

type Props = {
 params : {
    slug: string;
 }
}

export default async function CategoriesPage( {params}: Props) {
    const slug = params.slug;
  return <> CategoriesPage {slug} </>;
  
}
