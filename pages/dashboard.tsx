import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Dashboard() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <main>
      <h1>Dashboard</h1>
      <h2>Welcome {user && user.username}</h2>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
