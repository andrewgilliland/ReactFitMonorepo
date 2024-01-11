import styles from './shared-components-web.module.css';

/* eslint-disable-next-line */
export interface SharedComponentsWebProps {}

export function SharedComponentsWeb(props: SharedComponentsWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedComponentsWeb!</h1>
    </div>
  );
}

export default SharedComponentsWeb;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: typeof import('@testing-library/react').render;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsWeb />);
    expect(baseElement).toBeTruthy();
  });
}
