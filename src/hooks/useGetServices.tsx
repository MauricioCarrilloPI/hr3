// hooks/useCatalogData.ts
import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import hr3GetClient from '../api/hr3GetClient';


interface UseGetServicesProps {
  endpoint: string;
  queryKey: (string | number)[];
}

// Tipamos genérico para que puedas inferir el tipo de datos esperados
export function useGetServices<T = unknown>({
  endpoint,
  queryKey,
}: UseGetServicesProps): UseQueryResult<T, Error> {
  return useQuery<T, Error>({
    queryKey,
    queryFn: async () => {
      const response = await hr3GetClient.get<T>(endpoint);
      return response.data;
    },
  });
}
