const { exec } = require('child_process');

function getLastCommitHashAsync(filePath) {
  return new Promise((resolve) => {
    exec(`git log -n 1 --pretty=format:%h -- "${filePath}"`, { encoding: 'utf8' }, (err, stdout) => {
      if (err) return resolve(null);
      resolve(stdout.trim());
    });
  });
}

module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-git-commit-info',
    async extendMarkdownPageData(mdData) {
      if (mdData.filePath) {
        const commitHash = await getLastCommitHashAsync(mdData.filePath);
        if (commitHash) {
          mdData.frontMatter.lastUpdatedCommit = commitHash;
          mdData.metadata = mdData.metadata || {};
          mdData.metadata.lastUpdatedCommit = commitHash;
        }
      }
      return mdData;
    },
  };
};