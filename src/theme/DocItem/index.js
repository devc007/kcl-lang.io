import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import {usePluginData} from '@docusaurus/useGlobalData';

export default function DocItem(props) {
  const allCommitData = usePluginData('docusaurus-plugin-git-commit-info');
  console.log('allCommitData:', allCommitData);
  const commitData = allCommitData ? allCommitData[props.content.metadata.id] : null;
  const lastUpdatedCommit = commitData ? commitData.lastUpdatedCommit : null;
  console.log('lastUpdatedCommit:', lastUpdatedCommit);

  return (
    <>
      <OriginalDocItem {...props} />
      {lastUpdatedCommit && (
        <div style={{
          marginTop: '2em',
          padding: '0.75em 1em',
          background: '#f6f8fa',
          border: '1px solid #e1e4e8',
          borderRadius: '6px',
          fontSize: '0.95em',
          color: '#555',
        }}>
          <strong>Last updated commit:</strong> <code>{lastUpdatedCommit}</code>
        </div>
      )}
    </>
  );
}