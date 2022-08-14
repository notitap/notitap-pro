import { render } from '@testing-library/react';

import MediaResizeTiptapMediaResizeReact from './media-resize-tiptap-media-resize-react';

describe('MediaResizeTiptapMediaResizeReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaResizeTiptapMediaResizeReact />);
    expect(baseElement).toBeTruthy();
  });
});
