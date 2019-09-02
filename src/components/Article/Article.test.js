import React from 'react';
import {shallow} from '../../enzyme';
import Article, {ClapUnfilled, ClapFilled, BookmarkUnfilled, BookmarkFilled} from './Article'

describe('Article', () => {
    const mockHandleClapClick = jest.fn()
    const mockHandleBookmarkClick = jest.fn()
    const ClapComponent = shallow(<ClapFilled handleClapClick={mockHandleClapClick} />)
    const ArticleComponent = shallow(<Article 
        handleFollowClick={() => {}} 
        handleStarClick={() => {}} 
    />)

    it('renders correctly', () => {
        expect(ArticleComponent).toMatchSnapshot()
    })

    describe('checks bookmark', () => {
        beforeEach(() => {
            ArticleComponent.setProps({bookmark: true})
        })

        it('renders BookmarkFilled component', () => {
            expect(ArticleComponent.find('BookmarkFilled')).toBeTruthy()
        })
    })

    describe('when user did clap', () => {
        beforeEach(() => {
            ArticleComponent.setProps({didClap: true})
        })
        it('renders ClapFilled component', () => {
            expect(ArticleComponent.find('ClapFilled')).toBeTruthy()
        })

        // it('checks the handleClapClick method', () => {
        //     ArticleComponent.find('ClapFilled').simulate('click')
        //     expect(ClapComponent.mockHandleClapClick).toHaveBeenCalled()
        // })
    })
})