/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Concurso = {
  __typename?: 'Concurso';
  id?: Maybe<Scalars['ID']>;
  loteria?: Maybe<Scalars['Int']>;
  numeros?: Maybe<Array<Maybe<Scalars['String']>>>;
  data?: Maybe<Scalars['String']>;
};

export type Loteria = {
  __typename?: 'Loteria';
  id?: Maybe<Scalars['Int']>;
  nome?: Maybe<Scalars['String']>;
};

export type LoteriaConcurso = {
  __typename?: 'LoteriaConcurso';
  loteriaId?: Maybe<Scalars['Int']>;
  concursoId?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  loterias?: Maybe<Array<Maybe<Loteria>>>;
  loteriasConcursos?: Maybe<Array<Maybe<LoteriaConcurso>>>;
  concurso?: Maybe<Concurso>;
};


export type QueryConcursoArgs = {
  id: Scalars['ID'];
};


export type GetLoteriaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoteriaQuery = (
  { __typename?: 'Query' }
  & { loterias?: Maybe<Array<Maybe<(
    { __typename?: 'Loteria' }
    & Pick<Loteria, 'id' | 'nome'>
  )>>> }
);

export type GetLoteriaAndConcursosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLoteriaAndConcursosQuery = (
  { __typename?: 'Query' }
  & { loteriasConcursos?: Maybe<Array<Maybe<(
    { __typename?: 'LoteriaConcurso' }
    & Pick<LoteriaConcurso, 'loteriaId' | 'concursoId'>
  )>>> }
);

export type GetConcursoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetConcursoQuery = (
  { __typename?: 'Query' }
  & { concurso?: Maybe<(
    { __typename?: 'Concurso' }
    & Pick<Concurso, 'id' | 'loteria' | 'numeros' | 'data'>
  )> }
);
