import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getCacheKeySections } from "../../constants/queryKeys";
import getSectionService from "../../services/sectionsService";
import { Section } from "../../services/sectionsService";

const useQuerySection = (postId: number): UseQueryResult<Section[], Error> => {
    const sectionService = getSectionService(postId)
    const CACHE_KEY_SECTIONS = getCacheKeySections(postId)
    return useQuery({
        queryKey: CACHE_KEY_SECTIONS,
        queryFn: sectionService.get,
        staleTime: 1 * 60 * 1000,
    })
}

export default useQuerySection