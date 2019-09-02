import React from 'react';
import {shallow} from '../../enzyme';
import Article, {ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled} from './Article'

describe('Article', () => {    
    const ArticleComponent = shallow(<Article 
        handleFollowClick={() => {}} 
        handleStarClick={() => {}} 
    />)

    it('renders correctly', () => {
        expect(ArticleComponent).toMatchSnapshot()
    })

    describe('checks bookmark ternary', () => {
        beforeEach(() => {
            ArticleComponent.setProps({bookmark: true})
        })

        it('renders BookmarkFilled component', () => {
            expect(ArticleComponent.find('BookmarkFilled').exists()).toBeTruthy()
        })
    })

    describe('checks didClap ternary', () => {
        beforeEach(() => {
            ArticleComponent.setProps({didClap: true})
        })
        it('renders ClapFilled component', () => {
            expect(ArticleComponent.find('ClapFilled').exists()).toBeTruthy()
        })
    })

    describe('Bookmark Components', () => {
        const mockHandleBookmarkClick = jest.fn()
        const bookmarProps = {id: '5d66ae9445543ffea5167d5e', bookmarkClick: mockHandleBookmarkClick}
        const Bookmark_filled = shallow(<BookmarkFilled {...bookmarProps} />)
        const Bookmark_unfilled = shallow(<BookmarkUnfilled {...bookmarProps} />)
        
        it('when bookmarkClick is activated', () => {
            Bookmark_filled.simulate('click')
            expect(mockHandleBookmarkClick).toHaveBeenCalledWith(bookmarProps.id)
        })

        it('when bookmarkClick is deactivated', () => {
            Bookmark_unfilled.simulate('click')
            expect(mockHandleBookmarkClick).toHaveBeenCalledWith(bookmarProps.id)
        })
    })

    describe('Clap Components', () => {
        const mockHandleClapClick = jest.fn()
        const clapProps = {id: '5d66ae9445543ffea5167d5e', handleClapClick: mockHandleClapClick}
        const Clap_filled = shallow(<ClapFilled {...clapProps} />)
        const Clap_unfilled = shallow(<ClapUnfilled {...clapProps} />)

        it('when ClapUnfilled is clicked', () => {
            Clap_unfilled.simulate('click')
            expect(mockHandleClapClick).toHaveBeenCalledWith(clapProps.id)
        })

        it('when ClapFilled is clicked', () => {
            Clap_filled.simulate('click')
            expect(mockHandleClapClick).toHaveBeenCalledWith(clapProps.id)
        })
    })
})