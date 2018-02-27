import { renderComponent, expect } from '../testConfig';
import CommentList from '../../src/js/components/CommentList';

describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New comment', 'New comment2'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an Li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('New comment2');
  });


});
