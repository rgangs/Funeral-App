import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Phone,
  Mail,
  Users,
  Cross,
  Coffee,
  Flower2,
  ImageIcon,
  Receipt,
  Home,
} from "lucide-react";

import { createPageUrl } from "@/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: createPageUrl("Dashboard"), icon: Home },
  { title: "Invitations", url: createPageUrl("Invitations"), icon: Mail },
  { title: "Guest List", url: createPageUrl("GuestList"), icon: Users },
  { title: "Funeral", url: createPageUrl("Funeral"), icon: Cross },
  { title: "The Wake", url: createPageUrl("Wake"), icon: Coffee },
  { title: "Memorial", url: createPageUrl("Memorial"), icon: Flower2 },
  { title: "Inner Chat", url: createPageUrl("InnerChat"), icon: MessageCircle },
  { title: "Photo Gallery", url: createPageUrl("PhotoGallery"), icon: ImageIcon },
  { title: "Budget", url: createPageUrl("Budget"), icon: Receipt },
  { title: "Documentation", url: createPageUrl("Documentation"), icon: Heart },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --background: 10 10 10;
          --foreground: 245 245 245;
          --card: 26 26 26;
          --card-foreground: 245 245 245;
          --primary: 212 165 165;
          --primary-foreground: 26 26 26;
          --secondary: 42 42 42;
          --secondary-foreground: 245 245 245;
          --muted: 42 42 42;
          --muted-foreground: 163 163 163;
          --accent: 212 175 175;
          --accent-foreground: 26 26 26;
          --border: 42 42 42;
          --input: 42 42 42;
          --ring: 212 165 165;
        }
      `}</style>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
        <Sidebar className="border-r border-[#2a2a2a] bg-[#0a0a0a]/50 backdrop-blur-xl">
          <SidebarHeader className="border-b border-[#2a2a2a] p-6">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a5a5] to-[#c19a9a]">
                <Heart className="h-5 w-5 text-[#0a0a0a]" />
              </div>
              <div>
                <h2 className="text-lg font-light text-[#f5f5f5]">In Remembrance</h2>
                <p className="text-xs font-light text-[#a3a3a3]">Taking it slow, together</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className={`rounded-xl transition-all duration-300 ${
                            isActive
                              ? "border border-[#d4a5a5]/20 bg-[#d4a5a5]/10 text-[#d4a5a5]"
                              : "text-[#e5e5e5] hover:bg-[#2a2a2a]/50"
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
                            <item.icon className="h-4 w-4" />
                            <span className="font-light">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-8 px-3">
              <div className="rounded-xl border border-[#d4a5a5]/10 bg-[#2a2a2a]/30 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#d4a5a5]" />
                  <h3 className="text-sm font-light text-[#e5e5e5]">Need Support?</h3>
                </div>
                <p className="mb-3 text-xs text-[#a3a3a3] leading-relaxed">
                  Professional support is available 24/7.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[#d4a5a5]/20 bg-[#d4a5a5]/10 text-[#d4a5a5] hover:bg-[#d4a5a5]/20"
                >
                  <Phone className="mr-2 h-3 w-3" />
                  Get Help
                </Button>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex flex-1 flex-col">
          <header className="border-b border-[#2a2a2a] bg-[#0a0a0a]/30 px-6 py-4 backdrop-blur-xl md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-[#2a2a2a] p-2" />
              <div>
                <h1 className="text-lg font-light text-[#f5f5f5]">In Remembrance</h1>
                {currentPageName && (
                  <p className="text-xs text-[#a3a3a3]">Viewing {currentPageName}</p>
                )}
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
