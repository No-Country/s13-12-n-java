import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import LogoutButton from '@/components/logout';
import { buttonVariants } from '@/components/ui/button';

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">Empresa</h1>

      <div className="flex gap-x-2">
        {!session?.user ? (
          <>
            <Link href="/" className={buttonVariants()}>
              Home
            </Link>
            <Link href="/login" className={buttonVariants()}>
              Login
            </Link>
            <Link href="/register" className={buttonVariants()}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className={buttonVariants()}>
              Dashboard
            </Link>
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
