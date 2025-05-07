import Feed from  "../components/Feed/Feed"

export default function HomePage({ username, onLogout }) {
  return (
    <Feed username={username} onLogout={onLogout} />
  );
}