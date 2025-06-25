import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LastUpdatedCommitFooter({ lastUpdatedAt, lastUpdatedBy, lastUpdatedCommit }) {
  return (
    <div style={{ fontSize: '0.9em', color: '#888', marginTop: '2em' }}>
      {lastUpdatedAt && (
        <span>
          Last updated on {new Date(lastUpdatedAt * 1000).toLocaleDateString()} {lastUpdatedBy && <>by {lastUpdatedBy}</>}
        </span>
      )}
      {lastUpdatedCommit && (
        <span>
          {' '}| Commit: <code>{lastUpdatedCommit}</code>
        </span>
      )}
    </div>
  );
}
