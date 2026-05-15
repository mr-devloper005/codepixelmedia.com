import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowRight, Target, Globe } from "lucide-react";

const highlights = [
  { label: "Images in gallery", value: "120k+", icon: <Globe className="h-5 w-5" /> },
  { label: "Public profiles", value: "4.2k", icon: <Globe className="h-5 w-5" /> },
  { label: "Creator uploads (30d)", value: "18k", icon: <Target className="h-5 w-5" /> },
];

const values = [
  { title: "Images first", description: "The feed is built for photography and visual work—not generic cards or directory noise.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Identity that matches", description: "Profiles give every creator a clear home: logo, bio, and a path back to their gallery.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Share with intent", description: "Publish once; your work surfaces in image sharing and on your profile without extra tooling.", icon: <Target className="h-6 w-6 text-primary" /> },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} connects image sharing with public creator profiles—one place to publish visual work and introduce who you are.`}
      actions={
        <Button asChild>
          <Link href="/contact" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Contact Us
          </Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A gallery and a profile—together by design.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} is built for people who lead with images: publish to the shared gallery, then point
              audiences to a profile that explains your practice, links, and latest work.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

          </PageShell>
  );
}
