import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { accountData } from "@/constant/data";
import { notFound } from "next/navigation";

const Page = async ({
  params,
}: {
  params: Promise<{ accountSlug: string }>;
}) => {
  const { accountSlug } = await params;
  const accountSegment = decodeURI(accountSlug);

  const accountSegmentFound = accountData.find(
    (data) => data.title.toLowerCase() === accountSegment.toLowerCase(),
  );

  if (!accountSegmentFound) {
    return notFound();
  }

  return (
    <div className="space-y-4 p-4">
      <Card className="p-4 shadow-none">
        <CardTitle className="text-lg capitalize max-sm:text-sm">
          {accountSegmentFound?.title}
        </CardTitle>
        <CardDescription>{accountSegmentFound?.description}</CardDescription>
      </Card>
      {/* contents */}
      <Card className="border p-4 shadow-none">Data</Card>
    </div>
  );
};

export default Page;
