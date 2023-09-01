import { Octokit } from '@octokit/rest';

const OCTOKIT_TOKEN = process.env.REACT_APP_OCTOKIT_TOKEN;

if (!OCTOKIT_TOKEN) {
  console.warn('.env 파일에 github token이 없으므로 API 호출이 시간당 60회로 제한됩니다.');
}

export const octokit = new Octokit({
  auth: OCTOKIT_TOKEN,
});
