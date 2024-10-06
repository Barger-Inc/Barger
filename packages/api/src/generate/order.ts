/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * The cats API description
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import type { CreateOrderBodyRequest, CreateOrderResponse } from "../model"
import { createInstance } from "../api-instance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

export const orderControllerCreate = (
  createOrderBodyRequest: CreateOrderBodyRequest,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<CreateOrderResponse>(
    {
      url: `/order`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createOrderBodyRequest,
    },
    options
  )
}

export const getOrderControllerCreateMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof orderControllerCreate>>,
    TError,
    { data: CreateOrderBodyRequest },
    TContext
  >
  request?: SecondParameter<typeof createInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof orderControllerCreate>>,
  TError,
  { data: CreateOrderBodyRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof orderControllerCreate>>,
    { data: CreateOrderBodyRequest }
  > = (props) => {
    const { data } = props ?? {}

    return orderControllerCreate(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type OrderControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerCreate>>
>
export type OrderControllerCreateMutationBody = CreateOrderBodyRequest
export type OrderControllerCreateMutationError = unknown

export const useOrderControllerCreate = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof orderControllerCreate>>,
    TError,
    { data: CreateOrderBodyRequest },
    TContext
  >
  request?: SecondParameter<typeof createInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof orderControllerCreate>>,
  TError,
  { data: CreateOrderBodyRequest },
  TContext
> => {
  const mutationOptions = getOrderControllerCreateMutationOptions(options)

  return useMutation(mutationOptions)
}
export const orderControllerGetAll = (
  options?: SecondParameter<typeof createInstance>,
  signal?: AbortSignal
) => {
  return createInstance<CreateOrderResponse[]>(
    { url: `/order`, method: "GET", signal },
    options
  )
}

export const getOrderControllerGetAllQueryKey = () => {
  return [`/order`] as const
}

export const getOrderControllerGetAllQueryOptions = <
  TData = Awaited<ReturnType<typeof orderControllerGetAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof orderControllerGetAll>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof createInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getOrderControllerGetAllQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof orderControllerGetAll>>
  > = ({ signal }) => orderControllerGetAll(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof orderControllerGetAll>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type OrderControllerGetAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerGetAll>>
>
export type OrderControllerGetAllQueryError = unknown

export function useOrderControllerGetAll<
  TData = Awaited<ReturnType<typeof orderControllerGetAll>>,
  TError = unknown,
>(options: {
  query: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof orderControllerGetAll>>,
      TError,
      TData
    >
  > &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof orderControllerGetAll>>,
        TError,
        TData
      >,
      "initialData"
    >
  request?: SecondParameter<typeof createInstance>
}): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useOrderControllerGetAll<
  TData = Awaited<ReturnType<typeof orderControllerGetAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof orderControllerGetAll>>,
      TError,
      TData
    >
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof orderControllerGetAll>>,
        TError,
        TData
      >,
      "initialData"
    >
  request?: SecondParameter<typeof createInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useOrderControllerGetAll<
  TData = Awaited<ReturnType<typeof orderControllerGetAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof orderControllerGetAll>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof createInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useOrderControllerGetAll<
  TData = Awaited<ReturnType<typeof orderControllerGetAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof orderControllerGetAll>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof createInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getOrderControllerGetAllQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const orderControllerDelete = (
  id: number,
  options?: SecondParameter<typeof createInstance>
) => {
  return createInstance<number>(
    { url: `/order/${id}`, method: "DELETE" },
    options
  )
}

export const getOrderControllerDeleteMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof orderControllerDelete>>,
    TError,
    { id: number },
    TContext
  >
  request?: SecondParameter<typeof createInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof orderControllerDelete>>,
  TError,
  { id: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof orderControllerDelete>>,
    { id: number }
  > = (props) => {
    const { id } = props ?? {}

    return orderControllerDelete(id, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type OrderControllerDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerDelete>>
>

export type OrderControllerDeleteMutationError = unknown

export const useOrderControllerDelete = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof orderControllerDelete>>,
    TError,
    { id: number },
    TContext
  >
  request?: SecondParameter<typeof createInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof orderControllerDelete>>,
  TError,
  { id: number },
  TContext
> => {
  const mutationOptions = getOrderControllerDeleteMutationOptions(options)

  return useMutation(mutationOptions)
}
