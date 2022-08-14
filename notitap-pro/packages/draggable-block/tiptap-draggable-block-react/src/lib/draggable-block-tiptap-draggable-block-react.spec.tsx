import { render } from '@testing-library/react';

import DraggableBlockTiptapDraggableBlockReact from './draggable-block-tiptap-draggable-block-react';

describe('DraggableBlockTiptapDraggableBlockReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DraggableBlockTiptapDraggableBlockReact />);
    expect(baseElement).toBeTruthy();
  });
});
