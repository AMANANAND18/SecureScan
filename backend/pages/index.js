import { connectToCachedDB } from "../lib/db.js";

export async function getServerSideProps() {
  try {
    await connectToCachedDB();
    return { props: {} };  // You can pass props here if you need them
  } catch (error) {
    console.error("Error connecting to the database", error);
    return { props: { error: "Failed to connect to the database" } };
  }
}

export default function HomePage({ error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome to SecureScan</h1>
    </div>
  );
}
