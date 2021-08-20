import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pagination } from '../../shared/types/pagination';
import type { User } from './user.entity';

export const UserService = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'users/',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    getUsers: build.query<User[], Pagination>({
      query: (pagination: Pagination) => ({
        url: '',
        method: 'GET',
        params: pagination,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'User' as const,
                id,
              })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
    addUser: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    getUser: build.query<User, number>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
    updateUser: build.mutation<void, User>({
      query: (user: User) => ({
        url: `/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: build.mutation<{ id: number }, number>({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = UserService;
