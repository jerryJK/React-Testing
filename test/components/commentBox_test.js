import { renderComponent, expect } from '../testConfig';
import CommentBox from '../../src/js/components/CommentBox';

describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('commentBox');
  });

  it('has a textarea', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    })

    it('shows that text in textarea', () => {
        expect(component.find('textarea')).to.have.value('new comment');
    })

    it('clears the input when submitted', () => {
        component.simulate('submit');
        expect(component.find('textarea')).to.have.value('');
    })

  })


});
