import Link from "next/link";

export default function Home() {

  return (
    <>
      <div style={{ marginTop: '40px' }}>
        <Link href="/dashboard" style={{
          textDecoration: 'none', color: 'white', fontSize: 'large', background: 'gray', border: '1px solid black', margin: '10px', padding: '5px'
        }}>
          DashBoard

        </Link>

      </div>
      <div style={{ margin: '10px', marginTop: '20px' }}>
        Click the Above Button to see the dashboard
      </div>
    </>
  );
}
