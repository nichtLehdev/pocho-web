import Link from "next/link";

import { siteConfig } from "~/config/site";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { Button } from "~/components/ui/button";

import { Icons } from "~/components/icons";

export default function IndexPage() {
  return (
    <div className="container relative">
      <div className="flex justify-center">
        <Icons.logo className="h-96 w-96" />
      </div>

      <PageHeader>
        <PageHeaderHeading>Construction Ongoing</PageHeaderHeading>
        <PageHeaderDescription>
          {
            "Hi there! We're currently building this website. Check back soon for updates."
          }
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" variant="outline">
            <Link target="_blank" rel="noreferrer" href={siteConfig.links.pwr}>
              Posaunenwerk
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}
