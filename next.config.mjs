/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "psf";

// basePath/assetPrefix only apply in the GitHub Actions build, since this is
// a project page served at https://pyladieskla.github.io/psf/, not the repo
// root. Left unset for local dev and any other deploy target.
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  // exports every route as route/index.html instead of route.html - this is
  // Next's own recommended setting for GitHub Pages, since it avoids relying
  // on the host resolving extensionless .html files for routes other than "/"
  trailingSlash: true,
};

export default nextConfig;
