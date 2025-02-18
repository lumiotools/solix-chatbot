import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  MessageSquare,
  Database,
  Lock,
  Users,
  BarChart,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#E31837]">SOLIX</div>
          </div>
          <nav className="hidden md:flex gap-6"></nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0A1F44] relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl max-w-3xl">
                Enterprise Data Management Suite
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                Comprehensive documentation and support for Solix EDMS Standard
                Edition 2.2
              </p>
              <div className="space-x-4">
                <Link href="/chat">
                  <Button className="bg-[#E31837] hover:bg-[#E31837]/90 text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    variant="outline"
                    className="bg-transparent !text-white border-white hover:bg-white/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Data Management
                </h2>
                <div className="w-20 h-1 mx-auto bg-[#E31837] mt-4" />
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 max-w-5xl">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Database className="h-8 w-8 text-[#E31837]" />
                  <CardTitle>Data Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive analysis and evaluation of enterprise data
                    assets
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Lock className="h-8 w-8 text-[#E31837]" />
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced security measures to protect sensitive information
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Users className="h-8 w-8 text-[#E31837]" />
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Robust user access control and permission management
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Interactive Documentation
                </h2>
                <div className="w-20 h-1 mx-auto bg-[#E31837] mt-4" />
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2 mt-12 max-w-5xl">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-[#E31837]" />
                  <CardTitle>AI-Powered Chat Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to your questions about Solix EDMS
                    features and functionality
                  </p>
                  <Link href="/chat">
                    <Button className="bg-[#E31837] hover:bg-[#E31837]/90 text-white">
                      Start Chat
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <Search className="h-8 w-8 text-[#E31837]" />
                  <CardTitle>Smart Documentation Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Quickly find the information you need with our intelligent
                    search functionality
                  </p>
                  <Link href="/chat">
                    <Button
                      variant="outline"
                      className="border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white"
                    >
                      Search Docs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#0A1F44] text-white">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="text-zinc-200 md:text-xl">
                  Access comprehensive documentation and support for Solix EDMS
                  Standard Edition 2.2
                </p>
                <div className="space-x-4">
                  <Link href="/chat">
                    <Button className="bg-[#E31837] hover:bg-[#E31837]/90 text-white">
                      Chat with Assistant
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="bg-transparent !text-white border-white hover:bg-white/10"
                  >
                    Browse Documentation
                  </Button>
                </div>
              </div>
              <div className="lg:text-right">
                <BarChart className="inline-block h-64 w-64 text-white/20" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Solix Technologies, Inc. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
