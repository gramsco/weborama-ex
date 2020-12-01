/*
 "login": "gramsco",
  "id": 45275394,
  "node_id": "MDQ6VXNlcjQ1Mjc1Mzk0",
  "avatar_url": "https://avatars0.githubusercontent.com/u/45275394?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gramsco",
  "html_url": "https://github.com/gramsco",
  "followers_url": "https://api.github.com/users/gramsco/followers",
  "following_url": "https://api.github.com/users/gramsco/following{/other_user}",
  "gists_url": "https://api.github.com/users/gramsco/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gramsco/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gramsco/subscriptions",
  "organizations_url": "https://api.github.com/users/gramsco/orgs",
  "repos_url": "https://api.github.com/users/gramsco/repos",
  "events_url": "https://api.github.com/users/gramsco/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gramsco/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Antonin Gauthier",
  "company": null,
  "blog": "",
  "location": "France",
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 72,
  "public_gists": 1,
  "followers": 0,
  "following": 22,
  "created_at": "2018-11-23T00:08:19Z",
  "updated_at": "2020-12-01T08:13:20Z"
*/

import { Avatar, Layout, Menu, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserRepos } from "services";
import { useEffect, useState } from "react";
import Repository from "components/user/repository";
const { Content, Sider } = Layout;

export default function UserDashboard({
  login,
  repos_url,
  created_at,
  ...props
}) {
  const [repos, setRepos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getUserRepos(repos_url)
      .then((res) => setRepos(res.data))
      .catch((message) => notification.error({ message }));
  }, [login]);

  return (
    <div>
      <h1>
        {" "}
        <Avatar icon={<UserOutlined />} /> {login}
      </h1>
      <Layout>
        <Sider>
          <Menu theme="dark" mode="inline">
            {repos.map((repo, i) => (
              <Menu.Item onClick={() => setSelected(i)} key={repo.id}>
                {repo.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content style={{ width: "80vw" }}>
          <Repository {...selected} />
        </Content>
      </Layout>
    </div>
  );
}
