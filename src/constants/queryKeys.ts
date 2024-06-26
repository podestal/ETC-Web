export const CACHE_KEY_TOPICS = ['topics']

export const CACHE_KEY_POSTS = ['posts']

export const getCacheKeySections = (postId: number) => {
    return [postId, 'sections']
}