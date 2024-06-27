import React from 'react'
import { render, screen } from '@testing-library/react'
import Posts from '../../src/components/posts/Posts'
import { Post } from '../../src/services/api/postService'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('Posts', () => {
    it('should render nothing if posts length is 0', () => {
        render(<Posts posts={[]}/>)
        expect(screen.getByText(/no hay artículos/i)).toBeInTheDocument()
    })
    // it('should render nothing if posts length is 0', () => {
    //     const posts: Post[] = [
    //         {
    //             id: 10,
    //             title: 'Post 1',
    //             topic: 2,
    //             created_at: 'ayer',
    //         },
    //         {
    //             id: 12,
    //             title: 'Post 2',
    //             topic: 2,
    //             created_at: 'ayer',
    //         }

    //     ]
    //     render(<Posts posts={posts}/>)
    //     expect(screen.getByText(/no hay artículos/i)).toBeInTheDocument()
    // })
})