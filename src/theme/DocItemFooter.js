import React from 'react';
import LastUpdatedCommitFooter from '@theme/LastUpdatedCommitFooter';
import {useDoc} from '@docusaurus/theme-common/internal';

export default function DocItemFooter() {
  const {metadata} = useDoc();
  return (
    <>
      {/* ...other possible footers... */}
      <LastUpdatedCommitFooter
        lastUpdatedAt={metadata.lastUpdatedAt}
        lastUpdatedBy={metadata.lastUpdatedBy}
        lastUpdatedCommit={metadata.lastUpdatedCommit}
      />
    </>
  );
}
