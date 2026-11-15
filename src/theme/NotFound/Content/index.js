
import React from 'react';
import Link from '@docusaurus/Link';

export default function NotFoundContent() {
  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <h1>Page not found</h1>

          <p>
            The page you're looking for may have moved, been renamed,
            or no longer exists.
          </p>

          <p>You can continue browsing Family Manual:</p>

          <ul>
            <li>
              <Link to="/docs/intro">Start Here</Link>
              {' '}— Browse the available guides.
            </li>
            <li>
              <Link to="/">Homepage</Link>
              {' '}— Return to the Family Manual homepage.
            </li>
          </ul>

          <p>
            If you believe this link should work, please contact us at{' '}
            <a href="mailto:outreach@familymanual.org">
              outreach@familymanual.org
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
