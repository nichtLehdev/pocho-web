import Link from "next/link";

import { siteConfig } from "~/config/site";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/page-header";
import { Button } from "~/components/ui/button";

export default function GamesOverviewPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Games</PageHeaderHeading>
        <PageHeaderDescription>
          {
            "Hi there! This will be the page where you can find all the games we have to offer. Check back soon for updates."
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
