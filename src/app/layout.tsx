import { ClerkProvider } from "@clerk/nextjs";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clerk Auth Demo",
  description: "A demo application with Clerk authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ClerkProvider
          appearance={{
            baseTheme: undefined,
            variables: { colorPrimary: '#000000' },
            elements: {
              formButtonPrimary:
                'bg-black hover:bg-gray-800 text-sm normal-case',
            },
          }}
        >
          {/* 全局导航栏 */}
          <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                {/* Logo/标题部分 */}
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold text-white">
                    Clerk Auth Demo
                  </span>
                </div>
                
                {/* 用户操作部分 */}
                <div className="flex items-center space-x-4">
                  <SignedIn>
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 rounded-full hover:ring-2 hover:ring-white/50 transition-all"
                        }
                      }}
                    />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors duration-200">
                        Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </nav>
          
          {/* 为固定导航栏添加间距 */}
          <div className="pt-16">
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
