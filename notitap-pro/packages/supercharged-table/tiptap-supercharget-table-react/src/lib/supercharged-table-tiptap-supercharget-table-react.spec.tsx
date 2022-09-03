import { render } from '@testing-library/react';

import SuperchargedTableTiptapSuperchargetTableReact from './supercharged-table-tiptap-supercharget-table-react';

describe('SuperchargedTableTiptapSuperchargetTableReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SuperchargedTableTiptapSuperchargetTableReact />
    );
    expect(baseElement).toBeTruthy();
  });
});
