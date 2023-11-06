import { graphql } from "@octokit/graphql";
import { type GraphQlQueryResponseData } from "@octokit/graphql/dist-types/types";

// personal access token can only be used to fetch public github data
const githubGraphqlClient = graphql.defaults({
  headers: {
    authorization: `token ${process.env.githubPublicAccessToken}`,
  },
});

export async function queryUserMetrics(): Promise<GraphQlQueryResponseData> {
  const from = "2020-01-01T00:00:00";
  const to = "2021-01-01T00:00:00";

  return await githubGraphqlClient({
    query: `query userInfo($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          avatarUrl
          isHireable
          name
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              colors
              totalContributions
              months {
                firstDay
                name
                totalWeeks
                year
              }
              weeks {
                contributionDays {
                  color
                  contributionCount
                  contributionLevel
                  date
                  weekday
                }
              }
            }
          }
        }
      }`,
    login: "fitzk",
    from,
    to,
  });
}
