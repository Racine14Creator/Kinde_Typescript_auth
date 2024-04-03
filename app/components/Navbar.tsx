import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
    const { isAuthenticated } = getKindeServerSession()

    return (
        <nav className="w-full border-b bg-background h-[10vh] flex items-center">
            <div className="container flex justify-between items-center max-w-[1000px] mx-auto">
                <h1 className="text-3xl font-bold">Racine14 <span className="text-blue-400">creator</span></h1>
                <div className="flex items-center gap-x-5">
                    {await isAuthenticated() ? (
                        <LogoutLink>
                            <button>Se deconnecter</button>
                        </LogoutLink>
                    ) : (
                        <>
                            <LoginLink>
                                <button>Se connecter</button>
                            </LoginLink>
                            <RegisterLink>
                                <button>Creer un compte</button>
                            </RegisterLink>
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
}