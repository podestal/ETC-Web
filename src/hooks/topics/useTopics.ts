import { useQuery, UseQueryResult } from "@tanstack/react-query";
import topicsService, {Topic} from "../../services/api/topicsService";
import { CACHE_KEY_TOPICS } from "../../constants/queryKeys";

const useQueryTopics = ():  UseQueryResult<Topic[], Error> => {
    return useQuery({
        queryKey: CACHE_KEY_TOPICS,
        queryFn: topicsService.get,
        staleTime: 1 * 60 * 1000,
    })
}

export default useQueryTopics